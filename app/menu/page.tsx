import Head from 'next/head';
import MenuSection from '../components/MenuSection';
import Menu from '../components/Menu';
// import ImageScroller from './components/ImageScroller';
import Image from 'next/image';

const sections = [
    {
      sectionName: 'Coffee',
      items: [
        { name: 'Latte', price: '6', isHotOrIced: true },
        { name: 'Cappuchino', price: '4', isHotOrIced: true },
        { name: 'Macchiato', price: '4', isHotOrIced: false },
        { name: 'Espresso', price: '3', isHotOrIced: false },
        { name: 'Americano', price: '5', isHotOrIced: true },
        { name: 'Cold Brew', price: '5', isHotOrIced: true },
      ],
    },
    {
      sectionName: 'Other',
      items: [
        { name: 'Matcha', price: '6', isHotOrIced: true },
      ],
    },
    {
      sectionName: 'Add',
      items: [
        { name: 'Caramel', price: '', isHotOrIced: false },
        { name: 'Honey & Cinnamon', price: '', isHotOrIced: false },
      ],
    },
    {
      sectionName: 'Alternative',
      items: [
        { name: 'Oat', price: '', isHotOrIced: false },
      ],
    },
  ];
export default function MenuPage() {

  return (
    <div className="bg-lightTan min-h-screen">
      <Head>
        <title>Solas</title>
      </Head>
      <div className="w-full text-dark mx-auto px-4 pt-4">
        {/* <p className="font-plex text-lg mt-4">
          Solas is here for you! We strive to be everything you love about a local coffee shop, but wherever you want us. We know you like to have fun and so do we! Let us know where you’d like to see us next.
        </p> */}
        {/* <div className="relative overflow-hidden h-64"> Set height here */}
        
        
        <div className="text-lg">
          <Menu sections={sections} />
        </div>
            

      </div>
    </div>
  );
}