import './NotFound.css'
import { Link } from 'react-router-dom'
import deathStar from '../../images/SWdeathstar.svg'

export function NotFound() {
    return (
        <main className="notfound">
            <h1 className="notfound__header"><pre className="notfound__header-pre">4 4</pre></h1>
            <img className="notfound__image" src={deathStar} alt="Not Found"/>
            <Link className="notfound__link" to="/">Return</Link>
        </main>
    )
}