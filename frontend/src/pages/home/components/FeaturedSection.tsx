import { useMusicStore } from "@/store/useMusicStore";

const FeaturedSection = () => {
  const { isLoading, featuredSongs, error } = useMusicStore();
  if (isLoading) return <FeaturedGridSkeleton />;
  return <div></div>;
};

export default FeaturedSection;
