import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../../images/SWlogo.svg";
import { Navigation } from '../Navigation/Navigation';

export function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={logo} alt="Логотип"/> </Link>
            <Navigation />
        </header>
    )
}