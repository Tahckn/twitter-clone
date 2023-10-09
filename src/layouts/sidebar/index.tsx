import Logo from "@/assets/icons/logo.svg"
import {Link} from "react-router-dom"

export const Sidebar = () => {
    return (
        <aside className="w-[275px] min-h-[100svh]">
            <div className="py-0.5">
                <Link to="/"
                      className="transition-colors fill-logo flex hover:bg-hovered items-center justify-center rounded-full w-[52px] h-[52px]">
                    <Logo/>
                </Link>
            </div>
        </aside>
    );
};
