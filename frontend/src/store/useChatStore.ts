import { axiosInstance } from "@/lib/axios";
import type { Message } from "@/types";
import { create } from "zustand";
import { io } from "socket.io-client";
interface ChatStore {
  users: any[];
  isLoading: boolean;
  error: string | null;
  socket: any;
  isConnected: boolean;
  onlineUsers: Set<string>;
  userActivities: Map<string, string>;
  messages: Message[];
  fetchUsers: () => Promise<void>;
  initSocket: (userId: string) => void;
  disconnectSocket: () => void;
  sendMessage: (receiverId: string, senderId: string, content: string) => void;
}

const baseURL = "http://localhost:5001";

const socket = io(baseURL, {
  autoConnect: false, // when the user is authenticate
  withCredentials: true, // sending cookies and others
});

export const useChatStore = create<ChatStore>((set, get) => ({
  users: [],
  isLoading: false,
  error: null,
  socket: null,
  isConnected: false,
  onlineUsers: new Set(),
  userActivities: new Map(),
  messages: [],

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/users");
      set({ users: response.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
  initSocket: (userId: string) => {
    if (!get().isConnected) {
      socket.connect(); // connect with socket server
      socket.emit("user_connected", userId);

      socket.on("user_online", (users: string[]) => {
        set({ onlineUsers: new Set(users) });
      });

      socket.on("activities", (activities: [string, string][]) => {
        set({ userActivities: new Map(activities) });
      });

      socket.on("user_connected", (userId: string) => {
        //When a new user connects, it adds their ID to the existing onlineUsers set
        set((state) => ({
          onlineUsers: new Set([...state.onlineUsers, userId]),
        }));
      });
    }
  },
  disconnectSocket: () => {},
  sendMessage: (receiverId, senderId, content) => {},
}));
