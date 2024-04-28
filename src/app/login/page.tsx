"use client";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { signIn } from "next-auth/react";
import { BsSpotify } from "react-icons/bs";

const Login = async () => {
  return (
    <div className="relative flex h-screen">
      <Header />
      <div className="absolute inset-0 z-0">
        <div className="blur-[106px] h-full bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 opacity-20"></div>
      </div>
      <div className="z-10 flex flex-col justify-center items-center w-full">
        <button
          onClick={() => signIn("spotify")}
          type="button"
          className="cursor-pointer text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
        >
          <BsSpotify color="#1DB954" fontSize={20} />
          &nbsp;&nbsp;Sign in with Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
