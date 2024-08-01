import React from 'react';
import proImg from "../images/profileImg.png";
import coverImg from "../images/coverImg.png";

export default function ProfileHeader() {
  return (
    <div className="relative bg-zinc-800">
      <div 
        style={{ backgroundImage: `url(${coverImg})` }}
        className="w-full h-[315px] bg-cover bg-center"
      >
      </div>
      <div className='flex items-center justify-between px-16 pb-4'>
          <div className="bottom-0 left-16 flex items-center space-x-4">
            <img src={proImg} alt="Profile" className="rounded-full border-4 border-white w-28 h-28"/>
            <div>
              <h2 className="text-2xl font-bold text-white">Softmint Software Solutions</h2>
              <div className="text-gray-300">52K likes 51K followers</div>
            </div>
          </div>
          <div className="bottom-4 right-4 flex space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">WhatsApp</button>
            <button className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-500">Message</button>
            <button className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-500">Like</button>
          </div>
      </div>
    </div>
  );
}
