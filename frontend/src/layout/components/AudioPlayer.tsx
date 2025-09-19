import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevSongRef = useRef<string | null>(null);

  const { currentSong, isPlaying, playNext } = usePlayerStore();

  // handle play/pause logic
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        // Ignore AbortError (caused by quick pause/play toggles)
        if (err.name !== "AbortError") {
          console.error("Playback failed:", err);
        }
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // handle song ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      playNext();
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [playNext]);

  // handle song changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong?.audioUrl) return;

    const isSongChange = prevSongRef.current !== currentSong.audioUrl;

    if (isSongChange) {
      console.log("Loading audio:", currentSong.audioUrl);

      audio.src = currentSong.audioUrl;
      audio.load(); // ensure fresh load
      audio.currentTime = 0;

      prevSongRef.current = currentSong.audioUrl;

      audio.onloadedmetadata = () => {
        if (isPlaying) {
          audio.play().catch((err) => {
            // Ignore AbortError here as well
            if (err.name !== "AbortError") {
              console.error("Playback failed after load:", err);
            }
          });
        }
      };
    }
  }, [currentSong, isPlaying]);

  return <audio ref={audioRef} />;
};

export default AudioPlayer;
