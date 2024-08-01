import Divider from '@mui/material/Divider';

import React from 'react';

export default function InfoSection() {
  return (
    <div className="bg-zinc-800 p-4 shadow-md mt-2 text-gray-300 rounded-lg w-1/3">
      <h3 className="font-bold text-lg">Intro</h3>
      <p>We are a boutique digital transformation consultancy and software development company that provides...</p>
      <div className="mt-6 flex flex-col gap-3 ">
        <Divider className='bg-gray-600 '  />
        <div><strong>Location:</strong> No 310/1/1, Kaduwela Road, Koswatte Junction, Battaramulla, Sri Lanka</div>
      </div>
    </div>
  );
}
