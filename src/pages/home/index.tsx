import {Button} from "@/components/ui/button.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";

export const Home = () => {
    return (
        <div>
            Home Component
            <section>
                <Button>
                    Learn More
                </Button>
                <ModeToggle/>
            </section>
        </div>
    );
};
