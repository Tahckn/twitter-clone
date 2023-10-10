import {Logo} from "@/layouts/sidebar/logo"
import {Menu} from "@/layouts/sidebar/menu"

export const Sidebar = () => {
    return (
        <aside className="w-[275px] min-h-[100svh]">
            <div className="py-0.5">
                <Logo/>
                <Menu/>
            </div>
        </aside>
    );
};
