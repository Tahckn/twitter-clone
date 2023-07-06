import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Widgets() {
  return (
    <div className="w-[290px] xl:w-[350px] ml-8 hidden lg:inline">
        <div className="sticky top-0 pt-1.5 pb-[14px] z-50 border-b-2 border-[#16181c]">
            <div className=" flex group p-3 rounded-full items-center relative">
                <MagnifyingGlassIcon className=" h-5 z-50 group-focus-within:text-[#5ba3e6] text-[#71767b]"/>
                <input type="text" placeholder="Search Twitter" className=" pl-11 absolute rounded-full bg-[#202327] text-[15px] py-[21px] placeholder:text-[15px] inset-0 border-none focus:bg-[#000] text-white focus:ring-1 focus:ring-[#3a9def]"/>
            </div>
        </div>
    </div>
  )
}
