import Head from 'next/head';
import PhotoGrid from './components/PhotoGrid';
import MenuSection from './components/MenuSection';
import Menu from './components/Menu';
// import ImageScroller from './components/ImageScroller';
import Image from 'next/image';

const pictures = [
  {src: '/pictures/neillynoah_event1.jpeg', alt: 'Noah + Neilly Wedding'},
  {src: '/pictures/neillynoah_event2.jpg', alt: 'Noah + Neilly Wedding'},
  {src: '/pictures/davy_solas.webp', alt: 'Davy'},
  {src: '/pictures/kyra_james_oaks.webp', alt: 'James and Kyra at the Oaks'},
  {src: '/pictures/griff_websized.jpg', alt: 'Griff'},
  {src: '/pictures/neillynoah_event3.jpg', alt: 'Noah + Neilly Wedding'},
];
export default function Home() {

  return (
    <div className="bg-lightTan min-h-screen">
      <Head>
        <title>Solas</title>
      </Head>
      <div className="w-full text-dark mx-auto px-4 pt-4">
        <p className="font-plex text-lg mt-4">
          Solas is here for you! We strive to be everything you love about a local coffee shop, but wherever you want us. We know you like to have fun and so do we! Let us know where you’d like to see us next.
        </p>
        <PhotoGrid pictures={pictures} />

        {/* <div className="relative overflow-hidden h-64"> Set height here
        

        <div className="text-lg">
          <Menu sections={sections} />
        </div> */}
      </div>
    </div>
  );
}

