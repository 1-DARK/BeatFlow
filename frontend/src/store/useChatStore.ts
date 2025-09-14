import { create } from "zustand";

interface ChatStore {
  users: any[];
  fetchUsers: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useChatStore = create<ChatStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
    } catch (error) {}
  },
}));
