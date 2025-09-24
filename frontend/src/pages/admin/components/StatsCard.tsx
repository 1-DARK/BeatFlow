import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

type StatsCardProps = {
  icon: React.ElementType;
  label: string;
  value: number; // use number instead of string for animation
  bgColor: string;
  iconColor: string;
};

const StatsCard = ({
  bgColor,
  icon: Icon,
  iconColor,
  label,
  value,
}: StatsCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // animation duration in ms
    const increment = value / (duration / 16); // ~60fps steps

    const animate = () => {
      start += increment;
      if (start < value) {
        setDisplayValue(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animate();
  }, [value]);

  return (
    <Card className="bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800/80 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${bgColor}`}>
            <Icon className={`size-6 ${iconColor}`} />
          </div>
          <div>
            <p className="text-sm text-zinc-400">{label}</p>
            <p className="text-2xl font-bold">
              {displayValue.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
