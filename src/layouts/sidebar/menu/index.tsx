import {NavLink} from "react-router-dom";
import {mainMenu} from "@/utils/consts.tsx";
import classNames from "classnames";
import {More} from "@/layouts/sidebar/menu/more";
import {NewTweet} from "@/layouts/sidebar/menu/newTweet";
import {useAccount} from "@/store/auth/hooks.ts";

export const Menu = () => {
    const account = useAccount()


    return (
        <nav className="mb-1 mt-0.5" key={account.id}>
            {mainMenu.map((menu, index) => (
                <NavLink key={index} to={typeof menu.path === "function" ? menu.path() : menu.path}
                         className="block py-[3px] group">
                    {({isActive}) => (
                        <div
                            className={classNames("sidebar-item", {"font-bold": isActive})}>
                            <div className="relative">
                                {menu?.notification && (
                                    <span
                                        className="w-[18px] h-[18px] flex items-center justify-center
                                     bg-primary rounded-full -top-1.5 text-[11px] -right-1 absolute">
                                        {menu.notification}
                                    </span>
                                )}

                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <p className="pr-4 text-xl ">{menu.title}</p>
                        </div>
                    )}
                </NavLink>
            ))}

            <More/>

            <NewTweet/>
        </nav>
    );
};
