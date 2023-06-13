import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, UserIcon, BellIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EnvelopeIcon, ClipboardIcon, BookmarkIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

export default function Sidebar()
{
    return (
        <div className="sm:flex hidden flex-col p-2 xl:items-start fixed h-full">
            {/* Tw Logo  */}
            <div className="hoverEffect ">
                <Image src="/Logo.svg" width='34' height='34' alt="logo" />
            </div>
            {/* Menu  */}
            <div className="mt-4 flex flex-col space-y-2 mb-6 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
                <SidebarMenuItem text="Explore" Icon={MagnifyingGlassIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={EnvelopeIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
            </div>
            {/* Button  */}

            <button className="bg-[#348ed7] shadow-md brightness-105 duration-150 hover:brightness-95 transition-all hidden xl:inline text-lg font-bold text-white rounded-full w-56 h-12">Tweet</button>

            <button className="bg-[#348ed7] p-2 rounded-full shadow-md brightness-105 duration-150 hover:brightness-95 transition-all xl:hidden flex items justify-center">
                <PencilSquareIcon className="h-7"/>
            </button>

            {/* Mini-Profile  */}

            <div className="hoverEffect flex items-center justify-start mt-auto">
                <Image className="h-10 w-10 rounded-full xl:mr-2" src="/profile.png" alt="userImg" width='100' height='100'/>
                <div className="leading-5 hidden xl:inline">
                    <h4 className="brightness-125 font-bold">taha</h4>
                    <p className="text-[#5e6266]">@tahckn</p>
                </div>
                <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>

        </div>
    );
}
