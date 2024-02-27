import './Navigation.css'
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <div className="navigation">
            <Link className="navigation__link" to="/">Home</Link>
            <Link className="navigation__link" to="/characters">Characters</Link>
        </div>
    )
}