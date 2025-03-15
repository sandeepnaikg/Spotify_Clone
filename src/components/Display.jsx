import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useRef } from "react";
import { albumsData } from "../assets/assests";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = location.pathname.slice(-1);
  const albumData = albumsData[Number(albumId)];
  const bgColor = albumData ? albumData.bgColor : "#121212";
  console.log(bgColor);
  useEffect(() => {
    if (isAlbum && displayRef.current) {
      displayRef.current.style.backgroundColor = bgColor;
    } else if (displayRef.current) {
      displayRef.current.style.backgroundColor = "#121212";
    }
  }, [location, bgColor, isAlbum]);
  
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-4 rounded bg-[#121212] text-white overflow-auto lg:[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/home" element={<DisplayHome />}></Route>
        <Route path="/album/:id" element={<DisplayAlbum />}></Route>
      </Routes>
    </div>
  );
};

export default Display;
