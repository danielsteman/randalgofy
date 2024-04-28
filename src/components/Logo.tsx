import React from "react";
import { FaRandom } from "react-icons/fa";

const Logo = () => {
  return (
    <>
      <div aria-hidden="true" className="flex space-x-1 justify-center">
        <FaRandom color="#00a68b" fontSize={24} />
      </div>
      <span className="text-2xl font-bold text-gray-900 dark:text-white">
        randalgofy
      </span>
    </>
  );
};

export default Logo;
