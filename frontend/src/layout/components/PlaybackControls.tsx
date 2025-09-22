import { usePlayerStore } from "@/store/usePlayerStore";
import { useState } from "react";

const PlaybackControls = () => {
  const { currentSong, isPlaying, tooglePlay, playNext, playPrevious } =
    usePlayerStore();
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  return <div>hi</div>;
};

export default PlaybackControls;
