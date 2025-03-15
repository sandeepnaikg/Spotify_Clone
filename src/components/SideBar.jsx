import React from "react";
import { assets } from "../assets/assests";
const SideBar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-4 pl-2 cursor-pointer hover:bg-[#282828] p-2">
          <img src={assets.home_icon} className="w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-4 pl-2 cursor-pointer hover:bg-[#282828] p-2">
          <img src={assets.search_icon} className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} className="w-6 cursor-pointer" />
            <img src={assets.plus_icon} className="w-6 cursor-pointer" />
          </div>
        </div>

        <div className="flex  rounded flex-col font-semibold  bg-[#242424] p-4 m-2 gap-1  items-start justify-start pl-4">
          <h1>Create your first playlist!</h1>
          <p className="font-light text-sm">it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[50%] text-black  font-bold rounded-full mt-4 cursor-pointer">
            Create playlist
          </button>
        </div>

        <div className="flex  rounded flex-col font-semibold  bg-[#242424] p-4 m-2 gap-1  items-start justify-start pl-4 mt-4">
          <h1>let's find some podcasts to follow</h1>
          <p className="font-light  text-sm whitespace-nowrap">
            we'll keep you update on new episodes
          </p>
          <button className="px-4 py-1.5 bg-white text-[50%] text-black  font-bold rounded-full mt-4 cursor-pointer">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
