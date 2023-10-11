import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useAccount} from "@/store/auth/hooks.ts";


export const Account = () => {

    const account = useAccount()

    return (
        <div className="mt-auto">
            <Popover>
                <PopoverTrigger
                    className="my-3 text-left w-full p-3 flex rounded-full hover:bg-hoveredSidebar transition-colors">
                    <img src={account.avatarUrl} className="w-10 h-10 rounded-full" alt="avatar"/>
                    <div className="mx-3">
                        <h6 className="text-[15px] font-bold">
                            {account.fullName}
                        </h6>
                        <p className="text-[15px] leading-[20px] text-muted">
                            @{account.username}
                        </p>
                    </div>
                </PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
        </div>
    );
};
