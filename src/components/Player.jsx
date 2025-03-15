import React, { useContext } from "react";
import { assets } from "../assets/assests";
import { PlayerContext } from "../context/PlayerContex";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    audioRef,
    nextTrack,
    prevTrack,
    shuffleTracks,
  } = useContext(PlayerContext);

  // Function to handle seeking
  const handleSeek = (e) => {
    const seekBarWidth = seekBg.current.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickX / seekBarWidth) * duration;
  };

  return (
    <div className="h-[10%] bg-black flex items-center text-white justify-between px-4">
      {/* Song Info */}
      <div className="hidden lg:flex items-center gap-4">
        <img src={track.image} className="w-11" alt="Song" />
        <div>
          <p className="font-bold">{track.name}</p>
          <p className="text-sm w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {track.desc.slice(0, 30)}...
          </p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex items-center gap-1 m-auto flex-col">
        <div className="flex gap-4">
          <img
            onClick={shuffleTracks} // Added onClick for shuffle
            className="cursor-pointer w-4"
            src={assets.shuffle_icon}
            alt="Shuffle"
          />
          <img
            onClick={prevTrack} // Added onClick for previous track
            className="cursor-pointer w-4"
            src={assets.prev_icon}
            alt="Previous"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="cursor-pointer w-4"
              src={assets.pause_icon}
              alt="Pause"
            />
          ) : (
            <img
              onClick={play}
              className="cursor-pointer w-4"
              src={assets.play_icon}
              alt="Play"
            />
          )}
          <img
            onClick={nextTrack} // Added onClick for next track
            className="cursor-pointer w-4"
            src={assets.next_icon}
            alt="Next"
          />
          <img
            className="cursor-pointer w-4"
            src={assets.loop_icon}
            alt="Loop"
          />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 w-full">
          <p className="text-xs">
            {time.currentTime.minute}:
            {time.currentTime.second < 10
              ? `0${time.currentTime.second}`
              : time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer relative"
            onClick={handleSeek} // Added onClick event for seeking
          >
            <hr
              ref={seekBar}
              className="h-1 bg-green-800 rounded-full"
              style={{
                width: `${
                  ((time.currentTime.minute * 60 + time.currentTime.second) /
                    (time.totalTime.minute * 60 + time.totalTime.second)) *
                  100
                }%`,
              }}
            />
          </div>
          <p className="text-xs">
            {time.totalTime.minute}:
            {time.totalTime.second < 10
              ? `0${time.totalTime.second}`
              : time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img
          className="cursor-pointer w-4"
          src={assets.plays_icon}
          alt="Plays"
        />
        <img
          className="cursor-pointer w-4"
          src={assets.mic_icon}
          alt="Microphone"
        />
        <img
          className="cursor-pointer w-4"
          src={assets.queue_icon}
          alt="Queue"
        />
        <img
          className="cursor-pointer w-4"
          src={assets.speaker_icon}
          alt="Speaker"
        />
        <img
          className="cursor-pointer w-4"
          src={assets.volume_icon}
          alt="Volume"
        />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img
          className="cursor-pointer w-4"
          src={assets.mini_player_icon}
          alt="Mini Player"
        />
        <img className="cursor-pointer w-4" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
