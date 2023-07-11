import Image from "next/image";

export default function Users({user}) {
  return (    
    <a href='' target="_blank">
        <div className="flex items-center justify-between px-4 py-2 space-x-1 cursor-pointer transition-colors duration-150 hover:bg-[#1d1f23]">
            <div className="flex space-x-3 items-center">
            <Image className="rounded-full " width={40} height={35} src={user.picture.thumbnail} alt="Image"/>
            <div className="space-y-0.5">
                <h6 className="lg:max-w-[118px] xl:max-w-[160px] truncate text-[#E7E9EA] text-[15px] font-bold decoration-2 hover:underline ">{user.name.first+ " " + user.name.last}</h6>
                <p className="lg:max-w-[118px] xl:max-w-[160px] text-[15px] text-[#71767b] font-medium truncate overflow-clip">@{user.login.username}</p>
            </div>
            </div>
            <button className="bg-[#eff3f4] rounded-3xl text-[#0f1419] text-[15px] py-1 px-3 font-semibold hover:bg-[#d7dbdc] transition-colors duration-150">Follow</button>
        </div>
    </a>
  )
}