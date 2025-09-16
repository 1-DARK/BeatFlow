import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/store/useMusicStore";
import { useEffect } from "react";

const HomePage = () => {
  const {
    isLoading,
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
  } = useMusicStore();
  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);
  console.log(isLoading, madeForYouSongs, featuredSongs, trendingSongs);
  return (
    <div className="rounded-md overflow-hidden">
      <Topbar />
    </div>
  );
};

export default HomePage;
