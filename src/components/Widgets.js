'use client';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import News from "./News";
import { useState } from "react";
import Users from './Users';


export default function Widgets({ headlines, randomUsers })
{

  const [headlineNumber, setHeadlineNumber] = useState(7);
  const [randomUserNumber, setRandomUserNumber] = useState(3);

  return (
    <div className="xl:w-[350px] lg:w-[290px] ml-8 hidden lg:inline">
      <div className="sticky bg-black top-0 pt-1.5 pb-[17px] z-50 border-b-2 border-[#16181c]">
        <div className="xl:w-[350px] lg:w-[290px] flex group p-3 rounded-full items-center relative ">
          <MagnifyingGlassIcon className=" h-5 z-50 group-focus-within:text-[#5ba3e6] text-[#71767b]" />
          <input type="text" placeholder="Search Twitter" className="w-full leading-3 h-0 pl-11 absolute rounded-full bg-[#202327] text-[15px] py-[21px] placeholder:text-[15px] inset-0 border-none focus:bg-[#000] text-white focus:ring-1 focus:ring-[#3a9def]" />
        </div>
      </div>

      {/* HEADLINES  */}
      <div className="sticky -top-[35%]">
      <div className="bg-[#16181c] rounded-2xl  mt-4  w-full">
        <h4 className="px-4 py-2 text-[20px] font-bold text-white">What&apos;s Happening</h4>
        {headlines.slice(0, headlineNumber).map((headline) => (
          <News key={headline.title} headline={headline} />
        ))}
        <button onClick={() => setHeadlineNumber(headlineNumber + 3)} className="hover:bg-[#1d1f23] text-[15px] text-[#1D9BF0] rounded-b-2xl py-4 px-4 w-full text-start">Show more</button>
      </div>

      {/* WHO TO FOLLOW  */}
      <div>
        <div className=" bg-[#16181c] rounded-2xl mb-2  mt-4  w-full">
          <h4 className="px-4 py-2 text-[20px] font-bold text-white">Who to follow</h4>
          {randomUsers.slice(0, randomUserNumber).map((user) => (
            <Users key={user.login.username} user={user} />
          ))}
          <button onClick={() => setRandomUserNumber(randomUserNumber + 2)} className="hover:bg-[#1d1f23] text-[15px] text-[#1D9BF0] rounded-b-2xl py-4 px-4 w-full text-start">Show more</button>
        </div>
        <p className="text-xs text-center mb-2 text-[#71767B]">@ 2023 X Made By <a href="https://github.com/Tahckn" target="_blank">Taha Ceken</a></p>
      </div>
      </div>
    </div>
  );
}
