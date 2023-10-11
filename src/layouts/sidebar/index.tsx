import {Logo} from "@/layouts/sidebar/logo";
import {Menu} from "@/layouts/sidebar/menu";
import {Account} from "@/layouts/sidebar/account";

export const Sidebar = () => {
    return (
        <aside className="flex pr-2 flex-col overflow-auto w-[275px] max-h-[100svh] min-h-[100svh]">
            <Logo/>
            <Menu/>
            <Account/>
        </aside>
    );
};
