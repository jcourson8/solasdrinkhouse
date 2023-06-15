import Head from 'next/head';
import SlidingPictures from './components/SlidingPictures';

export default function Home() {
  const pictures = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
  ];

  return (
    <div className="bg-lightTan min-h-screen">
      <Head>
        <title>Basic Website</title>
      </Head>
      <div className="container text-dark mx-auto px-4 py-8">
          <div><p className="plex-mono text-2xl">THANKS FOR</p></div>
          <div><p className="plex-mono text-2xl text-right">STOPPING BY</p></div>
        <p className="plex-mono text-sm mt-4">
          Solas is here for you! We strive to be everything you love about a local coffee shop, but wherever you want us. We know you like to have fun and so do we! Let us know where you’d like to see us next.
        </p>
        {/* <SlidingPictures pictures={pictures} /> */}
      </div>
    </div>
  );
}