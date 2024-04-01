"use client";
import { signIn } from "next-auth/react";

const Login = async () => {
  return (
    <div>
      <button onClick={() => signIn("spotify", { callbackUrl: "/" })}>
        Sign in with Spotify
      </button>
    </div>
  );
};

export default Login;
