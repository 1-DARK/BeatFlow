import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Library } from "lucide-react";
import AlbumTable from "./AlbumTable";
import AddAlbumDialog from "./AddAlbumDialog";

const AlbumTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Library className="size-5 text-violet-500" />
              Album Library
            </CardTitle>
            <CardDescription>Manage Your Album Tracks</CardDescription>
          </div>
          <AddAlbumDialog />
        </div>
      </CardHeader>
      <CardContent>
        <AlbumTable />
      </CardContent>
    </Card>
  );
};

export default AlbumTabContent;
