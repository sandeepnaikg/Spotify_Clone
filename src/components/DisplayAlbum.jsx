// // import React from "react";
// // import Navbar from "./Navbar";
// // import { useParams } from "react-router-dom";
// // import { albumsData } from "../assets/assests";

// // const DisplayAlbum = () => {
// //   const { id } = useParams();
// //   const albumsData = albumsData[id];

// //   console.log(albumsData);
// //   return (
// //       <Navbar />
// //     </>
// //   );
// // };

// // export default DisplayAlbum;
// import React from "react";
// import Navbar from "./Navbar";
// import { useParams } from "react-router-dom";
// import { albumsData } from "../assets/assests";

// const DisplayAlbum = () => {
//   const { id } = useParams();
//   const album = albumsData[id];
//   console.log(album);

//   return (
//     <>
//       <Navbar />
//       <div className="  flex gap-8  flex-col mt-10 md:flex-row md:items-end">
//         <img src={albumsData.image} alt="" />
//       </div>
//     </>
//   );
// };

// export default DisplayAlbum;
import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assests";

const DisplayAlbum = () => {
  const { id } = useParams();
  const album = albumsData.find((item) => item.id.toString() === id);

  if (!album) {
    return (
      <>
        <Navbar />
        <div className="text-center text-red-500 font-bold mt-10">
          Album not found!
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
        <img className="w-48 rounded " src={album.image} alt={album.name} />
        <div className="flex flex-col">
          <p>Playlists</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5 "
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            .1,323,154 likes .<b>50 Songs,</b>
            about 3 hr 25 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hiddden sm:block">Date added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 text-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text[#a7a7a7]">{index + 1}</b>
            <img src={item.image} alt="" className="w-10 inline mr-5" />
            {item.name}
          </p>
          <p className="text-white text-[15px]">{album.name}</p>
          <p className="text-white  text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
