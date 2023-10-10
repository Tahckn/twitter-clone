import MoreIcon from "@/assets/icons/more.svg";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export const More = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="py-[3px] block group">
                    <div
                        className="sidebar-item">
                        <div className="relative">
                            <MoreIcon/>
                        </div>
                        <p className="pr-4 text-xl">
                            Daha Fazla
                        </p>
                    </div>
                </button>
            </PopoverTrigger>
            <PopoverContent>
                icerik
            </PopoverContent>
        </Popover>
    )
}