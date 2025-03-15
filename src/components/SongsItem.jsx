import React from "react";

const SongsItem = ({ name, image, desc }) => {
  return (
    <div className="min-w-[180px]  p-2 px-3 rounded cursor-pointer hover:bg-[#242424]">
      <img
        className="rounded "
        src={image}
        alt=''
      />
      <p className="font-blod mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongsItem;
