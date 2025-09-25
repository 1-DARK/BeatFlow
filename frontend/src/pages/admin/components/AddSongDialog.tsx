import { useMusicStore } from "@/store/useMusicStore";
import { useState } from "react";

const AddSongDialog = () => {
  const { albums } = useMusicStore();
  const [songDialogOpen, setSongDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: undefined,
    duration: 0,
  });
  return <div>hi</div>;
};

export default AddSongDialog;
