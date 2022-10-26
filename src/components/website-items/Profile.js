
import Footer from "./Footer";
import Recommends from "./Recommends";
import Bestsellers from "./Bestsellers";
import { Link } from "react-router-dom";
import NavBarProfile from "./NavBarProfile";

const Profile = () => {
    return (
        <>
        <NavBarProfile />
        <div className="profile">
            <Recommends/>
            <Bestsellers/>
        </div>
        <Footer />
        </>
        
    )
}

export default Profile