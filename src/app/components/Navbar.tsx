import React, { Component } from 'react';


function Navbar() {

    return(

        

<div className="flex flex-row z-50 bg-white-300 items-center">

{/* logo */}
<a href="/" className='basis-1/4'>

<img src="\simbolo-alsafi.png" className='w-1/4' alt="logo" />

</a>


<a href="" className='basis-1/4 font-1'>AskToAi</a>
<a href="" className='basis-1/4 font-1'>Contatti</a>
<a href="" className='basis-1/4 font-1'>FAQ</a>
<div className=" drawer-end object-right-top">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className=" drawer-button btn bg-[#0a1e49] w-32 h-32 rounded-bl-full border-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-1/2 h-1/2 pb-10 pl-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu  min-h-full text-white bg-[#0a1e49] text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>


</div>


    )

}

export default Navbar;