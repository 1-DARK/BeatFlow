import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Album } from "lucide-react";

const AlbumsTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Album className="h-5 w-5 text-emerald-500 " />
            </CardTitle>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
export default AlbumsTabContent;
