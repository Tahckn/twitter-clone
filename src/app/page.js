import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';

async function getHeadlines(){
  const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json",{cache:'no-store'});
  
  if(!res.ok){
    throw new Error("Failed to fetch headlines");
  }
    const data = await res.json();
    return data;
}

async function getRandomUsers(){
  const res = await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture",{cache:'no-store'})

  if(!res.ok){
    throw new Error("Failed to fetch users");
  }
  const data = await res.json();
  return data;
}

export default async function Page()
{
  const headlines = await getHeadlines();
  const users = await getRandomUsers();

  return (
    <main className='flex mx-auto  sm:max-w-2xl lg:max-w-5xl  xl:max-w-7xl min-h-screen'>
      {/* Sidebar  */}
      <Sidebar />
      {/* Feed  */}
      <Feed/>
      {/* Widgets  */}
      <Widgets headlines={headlines.articles} randomUsers={users.results}/>
      {/* Modal  */}
    </main>
  );
}


