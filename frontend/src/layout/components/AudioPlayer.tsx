import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useRef } from "react"; // Store mutable value

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevSongRef = useRef<string | null>(null);
  const { currentSong, isPlaying, playNext } = usePlayerStore();
  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
    else audioRef.current?.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => {
      playNext();
    };
    audio?.addEventListener("ended", handleEnded);
    return () => {
      audio?.removeEventListener("ended", handleEnded);
    };
  }, [playNext]);
  return <audio ref={audioRef} />;
};

export default AudioPlayer;
