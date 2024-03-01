import './Navigation.css'
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
    const location = useLocation();
    return (
        <div className="navigation">
            <Link className={`navigation__link ${location.pathname === '/' && 'navigation__link_actual'}`} to="/">Home</Link>
            <Link className={`navigation__link ${location.pathname === '/characters' && 'navigation__link_actual'}`} to="/characters">Characters</Link>
        </div>
    )
}