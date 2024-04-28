"use client";
import { signIn } from "next-auth/react";

const Login = async () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center bg-stone-900 p-8 rounded-lg">
        <h3 className="text-2xl mb-8">Login to your account</h3>
        <button
          className="bg-stone-800 text-white rounder-md py-2 px-4"
          onClick={() => signIn("spotify", { callbackUrl: "/" })}
        >
          Sign in with Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
