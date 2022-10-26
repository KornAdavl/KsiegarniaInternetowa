import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";

const BookPage = () => {

    const [showBorderOpis, setShowBorderOpis] = useState('border-yes');
    const [showBorderOpinie, setShowBorderOpinie] = useState('border-none');

    const clickOpis = () => {
        if(showBorderOpis === 'border-none'){
            setShowBorderOpis('border-yes');
            setShowBorderOpinie('border-none')

        }
    }

    const clickOpinie = () => {
        if(showBorderOpinie === 'border-none'){
            setShowBorderOpis('border-none');
            setShowBorderOpinie('border-yes')

        }
    }

    return(
        <>
        <NavBar />
        <div className="book-page">
            <div className="book-details">
                
                <div className="book-details-pro"></div>
                <div className="book-details-img"></div>
                <div className="book-details-text">
                    <div className="books">
                    <h2>Tytuł</h2>
                    <div className="book-author"><span>Autor:</span></div>
                    <div className="book-year"><span>Rok wydania:</span></div>
                    <div className="book-category"><span>Kategoria:</span></div>
                    </div>
                    <div className="book-reply">
                    <span className="txt">Maria Paszyńska</span>
                    <span className="txt">2002</span>
                    <span className="txt">Romantyczne</span>
                    </div>
                
                </div>
                
                <div className="book-price">
                        <span>23,45zł</span>
                        <button>Do koszyka</button>
                </div>
            
            </div>
            <div className="book-opinie">

                    <div className="opinie-choose">
                    <ul>
                        <li className={showBorderOpis} onClick={clickOpis}>Opis</li>
                        <li className={showBorderOpinie} onClick={clickOpinie}>Opinie</li>
                    </ul>
                    </div>

                    {showBorderOpis === "border-yes" ? <p>Warszawa, wiosna 1938 roku. Osiemnastoletnia Zuzanna wierzy, że jej życie będzie usłane różami. Pewnego dnia zachwyca ją wygrywana na skrzypcach melodia, a kilka miesięcy później poznaje zdolnego muzyka i traci dla niego głowę. Rodzi się pierwsza miłość, pojawiają marzenia i plany, a potem przychodzi wojna. Znaczy kolejne miesiące pasmem strat, cierpienia i bólu…

Zuzanna zaczyna pracę na Poczcie Głównej i włącza się w podziemną walkę z okupantem. Zostaje przydzielona do komórki „P” zajmującej się przechwytywaniem anonimowych donosów pisanych przez Polaków do „Szanownego Pana Gestapo”. Jeden z listów rozdziera jej serce. Okazuje się, że działalność konspiracyjna to niebezpieczna gra, w której stawką jest nie tylko życie, ale i miłość.

Listy do Gestapo to poruszająca do głębi spowiedź kobiety, która stanęła przed dramatycznymi wyborami. Opowieść o życiu brutalnie zmienionym przez wojnę. O ranach, które nigdy się nie goją, winach, które domagają się odkupienia, i przebaczeniu, które być może nie nadejdzie.</p> : <p>Opinie</p>}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default BookPage