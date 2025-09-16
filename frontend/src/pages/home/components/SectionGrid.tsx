import type { Song } from "@/types";

type SectionGridProps = {
  title: string;
  songs: Song[];
  isLoading: boolean;
};

const SectionGrid = ({ title, songs, isLoading }: SectionGridProps) => {
  if (isLoading) return <div></div>;
};

export default SectionGrid;
