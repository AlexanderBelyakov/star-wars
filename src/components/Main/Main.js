import './Main.css'
import banner from "../../images/SWbanner.svg"

export function Main() {
    return (
        <main className="main">
            <div className="main__info">
                <h1 className="main__header"><strong>Find</strong> all your favorite <strong>character</strong></h1>
                <h2 className="main__subheader">You can find out all the information about your favorite characters</h2>
                <a className="main__link" href="https://swapi.dev/" target="_blank" rel="noreferrer">See more...</a>
            </div>
            <img className="main__banner" src={banner} alt="Yoda"/>
        </main>
    )
}