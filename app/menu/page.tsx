import Head from 'next/head';
import MenuSection from '../components/MenuSection';
import Menu from '../components/Menu';
// import ImageScroller from './components/ImageScroller';
import Image from 'next/image';

const sections = [
    {
      sectionName: 'Coffee',
      items: [
        { name: 'Latte', price: '', isHotOrIced: true },
        { name: 'Cappuccino', price: '', isHotOrIced: true },
        { name: 'Cortado', price: '', isHotOrIced: false },
        { name: 'Espresso', price: '', isHotOrIced: false },
        { name: 'Americano', price: '', isHotOrIced: true },
        // { name: 'Cold Brew', price: '5', isHotOrIced: false },
      ],
    },
    {
      sectionName: 'Other',
      items: [
        { name: 'Sweet Matcha', price: '', isHotOrIced: true },
      ],
    },
    {
      sectionName: 'Add',
      items: [
        // { name: 'Caramel', price: '', isHotOrIced: false },
        { name: 'Brown Sugar', price: '', isHotOrIced: false },
        { name: 'Honey & Cinnamon', price: '', isHotOrIced: false },
        { name: 'Vanilla', price: '', isHotOrIced: false },
      ],
    },
    {
      sectionName: 'Alternative',
      items: [
        { name: 'Oat Milk', price: '', isHotOrIced: false },
      ],
    },
  ];
export default function MenuPage() {

  return (
    <div className="bg-lightTan">
      <Head>
        <title>Solas</title>
      </Head>
      <div className="w-full text-dark mx-auto px-4 ">
      
        <div className="text-lg">
          <Menu sections={sections} />
        </div>
      </div>
    </div>
  );
}
