import { Link } from "react-router-dom"
import DisplayBook from "./DisplayBook"
import { useState } from "react"

const BooksPage = () => {
    const [i, setI] = useState(0);
    return (
       <div className="books-page">
            <div className="categories">
            <span>Kategoria</span>
            <ul>
                <li><Link className="link" to="/literatura">Literatura</Link></li>
                <li><Link className="link" to="/romantyczne">Romantyczne</Link></li>
                <li><Link className="link" to="/kryminalne">Kryminalne</Link></li>
                <li><Link className="link" to="/komedia">Komedia</Link></li>
            </ul>
            </div>
            <div className="boo">
                
                <span>Książki</span>
                <select>
                    <option>Od największej oceny</option>
                    <option>Od najmniejszej oceny</option>
                </select>
               
                    <div className="books">
                    <DisplayBook />
                    <DisplayBook />
                    <DisplayBook />
                    <DisplayBook />
                    <DisplayBook />
                    </div>
               
               
            
            </div>
       </div>
    )
}

export default BooksPage