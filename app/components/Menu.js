import React from 'react';
import MenuSection from './MenuSection';
// import ReactCurvedText from "react-curved-text";
import CircleText from './CircleText';
import { Crimson_Pro } from 'next/font/google';

const Menu = ({ sections }) => {
  return (
    <div className="px-3 font-plex pt-2">
        <div className="flex justify-center">
            <div className="text-2xl font-plex italic pb-4">&quot;Solas Has Coffee&quot;</div>
            
            {/* <img
            src="/pictures/solashascoffee.png"
            alt="Description of image"
            className=""
            /> */}
        </div>
        <div className="border-t border-black"></div>
        <div className="divide-y divide-black">
        {sections.map((section, index) => (
            <MenuSection key={index} sectionName={section.sectionName} items={section.items} />
        ))}
        </div>
        <div className="border-t border-black"></div>
        <div className="text-right pt-3 text-xs">* Hot or Iced</div>
    </div>
  );
};

export default Menu;