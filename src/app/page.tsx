import Image from 'next/image'
import React, { Component } from 'react';
import './globals.css'
//componenti

import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <div className='home'>
      <div className='nav '>
      <Navbar/>
      </div>
       
       
       <div className='head '>
        <Header/>
       </div>
       <div>
        <Main/>
       </div>
    </div>
  
    
  )
}
