import { useAuthStore } from "@/store/useAuthStore";
import React from "react";
import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Album, Music } from "lucide-react";

const AdminPage = () => {
  const { isAdmin, isLoading } = useAuthStore();
  if (!isAdmin && !isLoading) return <div>Unauthorized</div>;
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900
   to-black text-zinc-100 p-8"
    >
      <Header />
      <DashboardStats />
      <Tabs>
        <TabsList>
          <TabsTrigger
            value="songs"
            className="data-[state=active]:bg-zinc-700"
          >
            <Music className="mr-2 size-4" />
            Songs
          </TabsTrigger>
          <TabsTrigger
            value="songs"
            className="data-[state=active]:bg-zinc-700"
          >
            <Album className="mr-2 size-4" />
            Albums
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default AdminPage;
