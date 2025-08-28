import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

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
