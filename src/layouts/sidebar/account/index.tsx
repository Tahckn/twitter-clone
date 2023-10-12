import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useAccount} from "@/store/auth/hooks.ts";
import {AccountDetails} from "@/layouts/sidebar/account/account-details";
import ThreeDotIcon from "@/assets/icons/threedot.svg"

export const Account = () => {

    const account = useAccount()

    return (
        <div className="mt-auto relative">
            <Popover>
                <PopoverTrigger
                    className="my-3 flex items-center text-left w-full p-3 flex rounded-full hover:bg-hoveredSidebar transition-colors">
                    <img src={account.avatarUrl} className="w-10 h-10 rounded-full" alt="avatar"/>
                    <div className="mx-3">
                        <h6 className="text-[15px] font-bold">
                            {account.fullName}
                        </h6>
                        <p className="text-[15px] leading-[20px] text-muted">
                            @{account.username}
                        </p>
                    </div>
                    <div className="fill-logo ml-auto">
                        <ThreeDotIcon/>
                    </div>
                </PopoverTrigger>
                <PopoverContent align="center" sideOffset={7} className="w-[300px] rounded-2xl">
                    <AccountDetails/>
                </PopoverContent>
            </Popover>
        </div>
    );
};
