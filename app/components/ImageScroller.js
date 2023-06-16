// 'use client'
// // import { useEffect, useRef } from 'react';
// // import Image from 'next/image';

// import { useState, useEffect, useRef } from 'react';

// const ImageScroller = ({ images }) => {
//   const [imageIndex, setImageIndex] = useState(0);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // change the interval speed to control the speed of the scrolling

//     return () => clearInterval(interval);
//   }, [images.length]); // Added images.length dependency

//   useEffect(() => {
//     imageRef.current.style.transition = 'none';
//     imageRef.current.style.transform = `translateX(-${imageIndex * 100}%)`;

//     requestAnimationFrame(() => {
//       imageRef.current.style.transition = 'transform 1s';
//       imageRef.current.style.transform = `translateX(-${(imageIndex + 1) * 100}%)`;
//     });
//   }, [imageIndex]);

//   return (
//     <div className="relative overflow-hidden h-64"> {/* Set height here */}
//       <div ref={imageRef} className="absolute flex">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             className="w-screen object-cover h-full" // Make sure images cover full height
//             alt="Image"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageScroller;