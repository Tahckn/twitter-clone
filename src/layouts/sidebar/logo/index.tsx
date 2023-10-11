import LogoIcon from "@/assets/icons/logo.svg";
import {Link} from "react-router-dom";


export const Logo = () => {
    return (
        <Link to="/"
              className="flex items-center justify-center rounded-full transition-colors fill-logo w-[52px] h-[52px] hover:bg-hoveredSidebar">
            <LogoIcon/>
        </Link>
    )
}
