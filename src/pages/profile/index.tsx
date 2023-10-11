import {useParams} from "react-router-dom";

export const Profile = () => {

    const {slug} = useParams()

    return (
        <div>
            profile page - {slug}
        </div>
    );
};
