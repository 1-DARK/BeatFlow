import { create } from "zustand";

interface AuthStore {}
export const useAuthStore = create<AuthStore>((set) => ({}));
