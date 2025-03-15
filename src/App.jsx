import "./App.css";
import Display from "./components/Display";
import Player from "./components/Player";
import SideBar from "./components/SideBar";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContex";

function App() {
  const { audioRef,track } = useContext(PlayerContext);
  return (
    <>
      <div className="h-screen bg-black text-white">
        <div className="h-[90%] flex">
          <SideBar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef}  src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
