import React from "react";
import { FaRandom } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <div aria-hidden="true" className="flex space-x-1 ">
        <FaRandom color="#00a68b" fontSize={24} />
      </div>
      <span className="font-meslo text-xl font-bold">randalgofy</span>
    </div>
  );
};

export default Logo;
