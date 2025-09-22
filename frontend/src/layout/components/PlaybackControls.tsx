import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useRef, useState } from "react";

const PlaybackControls = () => {
  const { currentSong, isPlaying, tooglePlay, playNext, playPrevious } =
    usePlayerStore();
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = document.querySelector("audio");
    const audio = audioRef.current;
    if (!audioRef) return;
    const updateTime = () => {
      if (audio) setCurrentTime(audio.currentTime);
    };
    const updateDuration = () => {
      if (audio) setDuration(audio.duration);
    };
    audio?.addEventListener("timeupdate", updateTime);
    audio?.addEventListener("loadeddata", updateDuration);
    const handleEnded = () => {
      usePlayerStore.setState({ isPlaying: false });
    };
    audio?.addEventListener("ended", handleEnded);

    return () => {
      audio?.removeEventListener("timeupdate", updateTime);
      audio?.removeEventListener("loadedmetadata", updateDuration);
      audio?.removeEventListener("ended", handleEnded);
    };
  }, [currentSong]);

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };

  return <div>hi</div>;
};

export default PlaybackControls;
