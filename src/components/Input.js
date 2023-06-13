'use client'
import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image"
import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Input() {

    const [count, setCount] = useState(0);

    const handleMessageChange = e =>{
        setCount(e.target.value.length);
    }

  return (
    <div className="flex border-b border-[#2f3336] p-3 space-x-3">
        <Image className="h-10 w-10 cursor-pointer hover:brightness-90 transition-all duration-150 rounded-full xl:mr-2" src="/profile.png" alt="userImg" width='100' height='100'/>
        <div className="w-full divide-y divide-[#2f3336]">
            <div>
                <TextareaAutosize minRows={2} onChange={handleMessageChange} maxRows={6} required maxLength="280" className="w-full leading-5 text-gray-300 text-lg border-none resize-none focus:ring-0 overflow-hidden bg-transparent  placeholder-gray-500 tracking-wide" placeholder="What's happening?"></TextareaAutosize>
            </div>
            <div className="flex items-center relative pt-2.5">
                <div className="flex">
                    <PhotoIcon  className="h-9 w-10 p-2 hoverEffect text-sky-500 hover:text-sky-300"/>
                    <FaceSmileIcon className="h-9 w-10 p-2 hoverEffect text-sky-500 hover:text-sky-300"/>
                </div>

                <div className="flex ml-auto space-x-2  items-center">
                    <div className={`${count > 0 ? 'visible': 'invisible'}`}>
                    <CircularProgressbar styles={buildStyles({
                    trailColor:'#2f3336',
                    pathColor:'#3796e4'
                    })} maxValue={280} value={count} className="h-6"/>
                    </div>
                
                <button className="hoverTweet text-sm px-5 py-2 inline disabled:opacity-50" disabled={!count} >Tweet</button>
                </div>
            </div>
        </div>
    </div>
  )
}
