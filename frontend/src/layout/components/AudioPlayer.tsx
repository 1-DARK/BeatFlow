import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevSongRef = useRef<string | null>(null);

  const { currentSong, isPlaying, playNext } = usePlayerStore();

  // handle play/pause logic
  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
    else audioRef.current?.pause();
  }, [isPlaying]);

  // handle song ends
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      playNext();
    };

    audio?.addEventListener("ended", handleEnded);

    return () => audio?.removeEventListener("ended", handleEnded);
  }, [playNext]);
  // handle song changes
  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    const audio = audioRef.current;

    // check if this is actually a new song
    const isSongChange = prevSongRef.current !== currentSong?.audioUrl;
    if (isSongChange) {
      audio.src = currentSong?.audioUrl;
      // reset the playback position
      audio.currentTime = 0;

      prevSongRef.current = currentSong?.audioUrl;

      // Add an event listener to wait for the audio to load before playing
      const handleCanPlayThrough = () => {
        if (isPlaying) audio.play();
      };

      audio.addEventListener("canplaythrough", handleCanPlayThrough);

      // Clean up the event listener when the component unmounts or the effect reruns
      return () => {
        audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      };
    }
  }, [currentSong, isPlaying]);

  return <audio ref={audioRef} />;
};
export default AudioPlayer;
