import React from 'react';
import Signup from './Signup';  // Import Signup component

const Background = () => {
  return (
    <div className="relative min-h-screen min-w-screen bg-white flex items-center justify-center">
      <div className="absolute bg-[#D9D9D9] w-[30%] h-[30%] rotate-[-70.87deg] right-[5%] top-[20%]"></div>
      <div className="absolute bg-[rgba(253, 221, 111, 0.86)] w-[30%] h-[30%] rotate-[-70.87deg] right-[5%] top-[20%]"></div>
      <div className="absolute bg-[#F8DD7E] w-[30%] h-[30%] rotate-[-70.87deg] left-[-10%] bottom-[10%]"></div>
      <div className="absolute bg-[#2BBBDB] w-[30%] h-[30%] rotate-[-70.87deg] left-[40%] bottom-[20%]"></div>
      <div className="absolute bg-[#EFBC07] w-[30%] h-[30%] rotate-[-70.87deg] left-[-10%] top-[30%]"></div>
      <div className="absolute bg-[#F7C104] w-[15%] h-[15%] rotate-[-76.04deg] right-[10%] bottom-[30%]"></div>
      <div className="absolute bg-[#35B092] w-[30%] h-[30%] rotate-[-70.87deg] right-[20%] bottom-[5%]"></div>
      <div className="absolute bg-[#35B092] w-[10%] h-[10%] rotate-[-70.87deg] right-[60%] top-[5%]"></div>
      <div className="absolute bg-[#CBE90F] w-[10%] h-[10%] rotate-[-124.7deg] right-[55%] bottom-[10%]"></div>
      <div className="absolute bg-[rgba(219, 212, 43, 0.51)] w-[15%] h-[15%] rotate-[-70.87deg] left-[10%] top-[40%]"></div>
      <div className="absolute bg-[#DBD42B] w-[10%] h-[10%] rotate-[-70.87deg] right-[10%] top-[30%]"></div>

      <Signup />  {/* Add the Signup component here */}
    </div>
  );
}

export default Background;
