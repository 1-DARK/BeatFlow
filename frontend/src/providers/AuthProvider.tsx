import { axiosInstance } from "@/lib/axios.ts";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
const updateApiToken = (token: string | null) => {
  if (token) {
    // if i have no token i am not authorize
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};
const AuthProvider = () => {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
      } catch (error) {}
    };
  }, []);
  return <div></div>;
};

export default AuthProvider;
