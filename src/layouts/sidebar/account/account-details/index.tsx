import {useAccount, useAccounts} from "@/store/auth/hooks.ts";
import classNames from "classnames";
import CheckmarkIcon from "@/assets/icons/checkmark.svg"
import {Separator} from "@/components/ui/separator.tsx";
import {setCurrentAccount} from "@/store/auth/actions.ts";
import {PopoverClose} from "@radix-ui/react-popover";

export const AccountDetails = () => {
    const accounts = useAccounts()
    const currentAccount = useAccount()

    return (
        <div className="py-2 relative">
            {accounts.map(account => (
                <PopoverClose className={classNames("w-full transition-colors text-left", {
                    "hover:bg-hoveredSidebar": currentAccount.id !== account.id
                })}>
                    <button
                        type="button"
                        disabled={currentAccount.id === account.id}
                        onClick={() => {
                            setCurrentAccount(account)
                            close();
                        }}
                        className="py-3 items-center w-full transition-colors px-4 flex text-left">
                        <img src={account.avatarUrl} className="w-10 h-10 rounded-full" alt="avatar"/>
                        <div className="mx-3 flex-1">
                            <h6 className="text-[15px] font-bold">
                                {account.fullName}
                            </h6>
                            <p className="text-[15px] leading-[20px] text-muted">
                                @{account.username}
                            </p>
                        </div>
                        <div className="mr-2 ml-3">
                            {currentAccount.id === account.id && (
                                <CheckmarkIcon/>
                            )}
                        </div>
                    </button>
                </PopoverClose>
            ))}
            <Separator className="my-3"/>
            <button className="py-3 px-4 text-left hover:bg-hoveredSidebar w-full font-bold">
                Var olan bir hesap ekle
            </button>
            <button className="py-3 px-4 text-left hover:bg-hoveredSidebar w-full font-bold">
                Hesapları Yönet
            </button>
            <button className="py-3 px-4  text-left hover:bg-hoveredSidebar w-full font-bold">
                <p className="max-w-[228px]">
                    @{currentAccount.fullName} hesabından çıkış yap
                </p>
            </button>
            <div className="w-0 h-0 absolute left-1/2 -translate-x-1/2 z-50 -bottom-[7px]
  border-l-[7px] border-l-transparent
  border-t-[7px] border-t-background
  border-r-[7px] border-r-transparent">
            </div>

        </div>
    );
};
