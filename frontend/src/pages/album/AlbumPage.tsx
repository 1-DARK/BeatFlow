import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AlbumPage = () => {
  const { albumId } = useParams();
  console.log(params);
  useEffect(() => {}, []);
  return <div>hi</div>;
};

export default AlbumPage;
