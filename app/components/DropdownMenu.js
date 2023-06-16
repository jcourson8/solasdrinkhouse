"use client";
import React, { useState } from "react";
// import { useLocation } from 'react-router-dom';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const location = useLocation();
    const router = useRouter();
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <button onClick={toggleMenu} className="flex flex-col items-center mt-2 ml-2">
          <div className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 ease-in-out ${isOpen && 'transform translate-x-2'}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${isOpen && 'transform -translate-x-2'}`}></div>
        </button>
        <div className={"overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64' : 'max-h-0'} pt-2 font-plex"}>
          {router.pathname !== '/solas' && (
            <div className='py-1'>
              <Link href="/" className='border border-black rounded-lg px-1 py-0 bg-transparent text-black inline-block' onClick={toggleMenu}>What's Solas?</Link>
            </div>
          )}
          {router.pathname !== '/event' && (
            <div className='py-1'>
              <Link href="/inquires" className='border border-black rounded-lg px-1 py-0 bg-transparent text-black inline-block' onClick={toggleMenu}>Can I have you at my event?</Link>
            </div>
          )}
          {router.pathname !== '/menu' && (
            <div className='py-1'>
              <Link href="/menu" className='border border-black rounded-lg px-1 py-0 bg-transparent text-black inline-block' onClick={toggleMenu}>Current Menu!</Link>
            </div>
          )}
        </div>
      </div>
    );
  };

export default DropdownMenu;
