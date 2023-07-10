import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import Image from 'next/image';

export default function Page()
{
  return (
    <main className='flex mx-auto  sm:max-w-2xl lg:max-w-5xl  xl:max-w-7xl min-h-screen'>
      {/* Sidebar  */}
      <Sidebar />
      {/* Feed  */}
      <Feed/>
      {/* Widgets  */}
      <Widgets />
      {/* Modal  */}
    </main>
  );
}


