import { Card } from "@/components/ui/card";

type StatsCardProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  bgColor: string;
  iconColor: string;
};
const StatsCard = ({
  bgColor,
  label,
  icon,
  value,
  iconColor,
}: StatsCardProps) => {
  return <Card></Card>;
};

export default StatsCard;
