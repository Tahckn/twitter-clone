import { EllipsisHorizontalIcon, ChatBubbleLeftIcon, TrashIcon, HeartIcon, ChartBarSquareIcon, ShareIcon, ArrowUpIcon, ArrowUpTrayIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';


export default function Post({post}) {
  return (
    <div className='flex p-3 cursor-pointer border-b border-[#2f3336]'>
        {/* User Image */}

        <Image className='h-11 w-11 rounded-full mr-4' src={post.userImg} width={100} height={100} alt="user-image" />
        
        {/*  Right Side */}
        <div>
        {/* Header */}

        <div className='flex items-start'>
        {/* Post User Info */}
        <div className='flex items-center'>
        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
        <span className='text-sm sm:text-[15px] text-[#71767b] ml-1'>@{post.username} · </span>
        <span className='text-sm hover:underline sm:text-[15px] text-[#71767b] ml-1' >{post.timestamp}</span>
        </div>

        {/* Dot Icon */}
        <EllipsisHorizontalIcon className='-mt-1 ml-auto text-[#45484b] hover:text-[#3a9def] h-8 w-9 p-1 hoverEffect'/>
        </div>

        {/* Post Text */}
        <p className='text-[#e7e9ea] mb-2 sm:text-[16x] text-[15px]'>{post.text}</p>

        {/* Post Image */}
        <Image width={520} height={300} className='rounded-2xl mr-2 border border-[#2f3336] ' src={post.img} alt="post-image" />

        {/* Icons */}

        <div className='flex justify-between mr-20'>
        <ChatBubbleLeftIcon className='text-[#71767b] h-9 w-9 hoverEffect p-2 hover:text-[#3a9def]'/>
        <TrashIcon className='text-[#71767b] h-9 w-9 hoverEffect p-2 hover:text-[#d5186f]'/>
        <HeartIcon className='text-[#71767b] h-9 w-9 hoverEffect p-2 hover:text-[#d5186f]'/>
        <ChartBarIcon className='text-[#71767b] h-9 w-9 hoverEffect p-2 hover:text-[#3a9def]'/>
        <ArrowUpTrayIcon className='text-[#71767b] h-9 w-9 hoverEffect p-2 hover:text-[#3a9def]'/>
        </div>

        </div>
    </div>
  )
}
