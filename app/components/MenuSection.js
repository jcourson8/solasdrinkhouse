// 'use client'
// import { useEffect, useRef } from 'react';
// import Image from 'next/image';

// import { useState, useEffect, useRef } from 'react';

const MenuSection = ({ sectionName, items }) => {
  return (
    <div className="flex items-start justify-between font-plex pt-4 pb-6">
      <div className="border border-black rounded-lg px-1 py-0 bg-transparent text-black">
        {sectionName}
      </div>
      <div className="flex">
        <div className="flex flex-col items-end mr-1">
          {items.map((item, index) => (
            <div key={index} className="text-right">
              {item.name}{item.price ? (" - " + item.price) : ""}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start">
          {items.map((item, index) => (
            <div key={index}>
              {item.isHotOrIced ? '*' : '\u00A0'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;







