import { SparklesIcon } from '@heroicons/react/24/outline';
import Input from './Input';
import Post from './Post';

export default function Feed() {
  const posts = [
    {
      id : '1',
      name :"Recep Baltaş",
      username : 'buckberi',
      userImg: 'https://pbs.twimg.com/profile_images/1617949667731423232/8-z9wqd-_400x400.jpg',
      img:"https://pbs.twimg.com/media/FxmWJhoXwAE3SFJ?format=jpg&name=900x900",
      text:'Benim son zamanda gördüğüm şu ki; evrendeki hemen her şey Cumhur İttifaki aleyhine çalişiyor.',
      timestamp:'2 hours ago'
    },
    {
      id : '2',
      name :"Recep Baltaş",
      username : 'buckberi',
      userImg: 'https://pbs.twimg.com/profile_images/1617949667731423232/8-z9wqd-_400x400.jpg',
      img:"https://pbs.twimg.com/card_img/1675743363520184323/L2g7ppCY?format=jpg&name=small",
      text:'Randi Vakfinın Artık Sürdürülmeyen 1 Milyon Dolar Para Ödülü Neyi Amaçladı?',
      timestamp:'2 days ago'
    }
  ]

  return (
    <div className='xl:ml-[283px] border-x border-[#2f3336] xl:min-w-[598px] sm:ml-[80px] flex-grow max-w-xl'>

      {/* Header  */}

        <div className='flex py-2 px-4 sticky items-center top-0 bg-transparent z-50 backdrop-blur-sm border-b border-[#2f3336]'>
            <h2 className='cursor-pointer text-xl font-bold'>Home</h2>
            <div className='hoverEffect ml-auto'>
                <SparklesIcon className='h-5'/> 
            </div>
        </div>
      {/* Input  */}
      <Input/>
      {posts.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}
