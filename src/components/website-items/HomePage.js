import Recommends from "./Recommends"
import Bestsellers from "./Bestsellers"
import Koszyk from "./Koszyk"

const HomePage = (props) => {
    return(
    <div className="home-content">
        <Recommends class={props.class} />
        <hr></hr>
        <Bestsellers />
    </div>
    )

}


export default HomePage