"use client";
import { BsSpotify } from "react-icons/bs";

const Login = async () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center bg-stone-900 p-8 rounded-lg">
        <h3 className="text-xl mb-8 font-bold">Login to your account</h3>
        <a
          href="/api/auth/signin"
          type="button"
          className="cursor-pointer text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30  mb-2"
        >
          <BsSpotify color="#1DB954" fontSize={20} />
          &nbsp;&nbsp;Sign in with Spotify
        </a>
      </div>
    </div>
  );
};

export default Login;
