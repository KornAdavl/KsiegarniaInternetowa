import NavBar from "./NavBar";
import Footer from "./Footer";
import {useState} from "react";

const Koszyk = () => {

    const [isEmptyBin , setisEmptyBin] = useState(false);
    return(
    <>
    <NavBar />
    <div className="koszyk">
        {isEmptyBin === false ? <span>Koszyk jest pusty</span> : <p>Inne</p>}
        
    </div>
    <Footer />
    </>
    )
}

export default Koszyk