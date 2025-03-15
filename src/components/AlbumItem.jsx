 import React from 'react'
 import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc ,id}) => {
  const navigate = useNavigate();

  return (
    <div  onClick={()=>navigate(`/album/${id}`)}className="min-w-[180px] min-h-[200px] p-2 px-3 rounded cursor-pointer hover:bg-[#242424]">
      <img
        className="rounded w-full h-[150px] object-cover"
        src={image}
        alt={name}
      />
      <p className="font-black mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
export default AlbumItem;
