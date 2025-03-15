import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assests";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[1]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const nextTrack = () => {
    const currentIndex = songsData.findIndex((song) => song === track);
    const nextIndex = (currentIndex + 1) % songsData.length;
    setTrack(songsData[nextIndex]);
    setPlayStatus(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const prevTrack = () => {
    const currentIndex = songsData.findIndex((song) => song === track);
    const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
    setTrack(songsData[prevIndex]);
    setPlayStatus(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const updateTime = (e) => {
    const currentMinute = Math.floor(e.target.currentTime / 60);
    const currentSecond = Math.floor(e.target.currentTime % 60);
    const totalMinute = Math.floor(e.target.duration / 60);
    const totalSecond = Math.floor(e.target.duration % 60);

    setTime({
      currentTime: {
        minute: currentMinute,
        second: currentSecond,
      },
      totalTime: {
        minute: totalMinute,
        second: totalSecond,
      },
    });

    if (seekBar.current) {
      seekBar.current.style.width = `${
        (e.target.currentTime / e.target.duration) * 100
      }%`;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        console.log("Metadata loaded, duration:", audioRef.current.duration);
        setTime((prevTime) => ({
          ...prevTime,
          totalTime: {
            minute: Math.floor(audioRef.current.duration / 60),
            second: Math.floor(audioRef.current.duration % 60),
          },
        }));
      };

      audioRef.current.addEventListener("timeupdate", updateTime);
      audioRef.current.addEventListener("ended", nextTrack);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener("timeupdate", updateTime);
          audioRef.current.removeEventListener("ended", nextTrack);
        }
      };
    }
  }, [track]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    updateTime,
    nextTrack,
    prevTrack,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider, PlayerContext };
