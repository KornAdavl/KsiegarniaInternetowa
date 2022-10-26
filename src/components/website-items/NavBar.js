import searchImg from "../../images/search.png";
import profileImg from "../../images/profile.png";
import koszykImg from "../../images/koszyk.png";
import logoImg from "../../images/logo.jpg";
import logoImg2 from "../../images/logo2.png";
import upArrowImg from "../../images/uparrow.png";
import downArrowImg from '../../images/downarrow.png';
import { useState } from "react";
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    const [showCategories, setShowCategories] = useState('book-categories-none');
    const [downArrow, setDownArrow] = useState('downarrow-block');
    const [upArrow, setUpArrow] = useState('uparrow-none');
    const [dropdown, setDropdown] = useState('none');
    const [dropdownProfile, setDropdownProfile] = useState('dropdown-profile-none')
    
    
    const show = () => {
        setShowCategories('book-categories-block');
        setDownArrow('downarrow-none');
        setUpArrow('uparrow-block');
    }

    const collapse = () => {
        setShowCategories('book-categories-none');
        setDownArrow('downarrow-block');
        setUpArrow('uparrow-none');
    }

    const showDropdown = () => {
        if(dropdown === "none")
        {
            setDropdown("block")
            setUpArrow('uparrow-block');
            setDownArrow('downarrow-none');
        }
        else {
            setDropdown("none");
            setDownArrow('downarrow-block');
            setUpArrow('uparrow-none');
        }
    }

    const showDropdownProfile = () => {
        if(dropdownProfile === "dropdown-profile-none")
        {
            setDropdownProfile('dropdown-profile-block');
        }
        else {
            setDropdownProfile('dropdown-profile-none')
        }
    }


    /*props.class(showCategories);*/

    return (
        <div className="navbar navbar navbar-default">
            <div className="navbar-main container">
                <div className="navbar-logo navbar-brand">
                    <Link to="/"><img src={logoImg2}></img></Link>
                </div>
                <div className="navbar-search">
                <input type="text" placeholder="Czego szukasz?"></input>
                <img className="search" src={searchImg}></img>
                </div>
                <div className="navbar-profile">
                <div className="profile">
                    <Link className="profile-link" to="/zaloguj"> 
                    <img  className="img-profile" src={profileImg}></img>
                    <span>Profil</span>
                    </Link>
                  
                </div>
                <div className="koszyk1">
                    <img src={koszykImg}></img>
                    <span>Koszyk</span>
                </div>
                </div>
            </div>
            <div className="links">
                <Link to="/books" className="books" href="#" onClick={showDropdown}>Książki</Link><div className="arrow"><img className={upArrow} src={upArrowImg} onClick={collapse}></img><img className={downArrow} src={downArrowImg} onClick={show}></img> </div>
                    <ul className={dropdown}>
                    <li><a href="#">Literatura</a></li>
                    <li><a href="#">Literatura</a></li>
                    <li><a href="#">Literatura</a></li>
                    <li><a href="#">Literatura</a></li>
                    </ul>
                
                <Link to="/nowosci" className="link-nowosci">Nowości</Link>
                <Link to="/zapowiedzi">Zapowiedzi</Link>
                <Link to="/promocje">Promocje</Link>
            </div>
        </div>
    )
}

export default NavBar