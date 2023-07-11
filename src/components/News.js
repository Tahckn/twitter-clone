import Image from "next/image";

export default function News({headline}) {
  return (    
    <a href={headline.url} target="_blank">
        <div className="flex items-center justify-between px-4 py-2 space-x-1 cursor-pointer transition-colors duration-150 hover:bg-[#1d1f23]">
            <div className="space-y-0.5">
                <h6 className="text-[#E7E9EA] text-sm font-bold">{headline.title}</h6>
                <p className="text-xs text-[#71767b] font-medium">{headline.source.name}</p>
            </div>
            <Image className="rounded-xl" width={70} height={70} src={headline.urlToImage} alt="Image"/>
        </div>
    </a>
  )
}
