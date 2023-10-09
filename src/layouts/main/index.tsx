import {Outlet} from "react-router-dom";
import {Sidebar} from "@/layouts/sidebar";
import {RightBar} from "@/layouts/rightbar";

export const MainLayout = () => {
    return (
        <div className="mx-auto flex w-[1265px]">
            <Sidebar/>
            <main className="flex flex-1 gap-[30px]">
                <main className="flex-1 border-x max-w-[600px] border-border">
                    <Outlet/>
                </main>
                <RightBar/>
            </main>
        </div>

    );
};
