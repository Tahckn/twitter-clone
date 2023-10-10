import LogoIcon from "@/assets/icons/logo.svg";
import {Link} from "react-router-dom";


export const Logo = () => {
    return (
        <Link to="/"
              className="hover:bg-hoveredSidebar transition-colors fill-logo flex items-center justify-center rounded-full w-[52px] h-[52px]">
            <LogoIcon/>
        </Link>
    )
}
