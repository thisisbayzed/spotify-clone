import Image from "next/image";
import React from "react";
import { assets } from "../public/assets/frontend-assets/assets";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        {/*Icons */}
        <div className="flex gap-3 items-center pl-8 cursor-pointer">
          <Image src={assets.home_icon} alt="logo" width={40} height={40} />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex gap-3 items-center pl-8 cursor-pointer">
          <Image src={assets.search_icon} alt="logo" width={40} height={40} />
          <p className="font-bold">Search</p>
        </div>
      </div>
      {/* start of playlist */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={assets.stack_icon}
              alt="playlist"
              width={40}
              height={40}
            />
            <p className="font-bold">Your Library</p>
          </div>
          {/* start another icons */}
          <div className="flex items-center gap-3">
            <Image src={assets.arrow_icon} alt="arrow" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
