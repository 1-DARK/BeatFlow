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
    const updateTime = () => setCurrentTime(audio.currentTime);
  }, []);
  return <div>hi</div>;
};

export default PlaybackControls;
