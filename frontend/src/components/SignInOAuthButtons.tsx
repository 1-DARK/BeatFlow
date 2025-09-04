import { useSignIn } from "@clerk/clerk-react";

const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) {
    return null;
  }
  return <div></div>;
};

export default SignInOAuthButtons;
