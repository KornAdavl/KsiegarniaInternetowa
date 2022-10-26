import NavBar from "./NavBar";
import Footer from "./Footer";
import {Link } from "react-router-dom";

const Zaloguj = () => {
    return (
        <>
        <NavBar />
        <div className="zaloguj">
            <span className="text-zaloguj">Zaloguj</span>
            <label className="label-zaloguj">Login</label>
            <input className="input-zaloguj" type="text" placeholder="Wprowadź swój login"></input>
            <label className="label-zaloguj">Hasło</label>
            <input className="input-zaloguj" type="text" placeholder="Wprowadź swoje hasło"></input>
            <Link to="/profile" className="button-zaloguj">Zaloguj</Link>
            <span className="info-register">Nie masz jeszcze konta?</span>
            <Link to="/rejestracja" className="button-register">Załóż konto</Link>
        </div>
        <Footer />
        </>
    )
}

export default Zaloguj