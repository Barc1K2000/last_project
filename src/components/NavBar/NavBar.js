import './NavBar.css';
import {NavLink} from "react-router-dom"

import navLogo from './NavLogo.png'
export const NavBar = (props) => {
    const { id, name, surname, phone_number, deleteHandler } = props
    return (
        <div className="navbar">
            <img src={navLogo} />
            <ul>
                <li><NavLink to="/about">О нас</NavLink></li>
                <li>О кроссфите</li>
                <li><NavLink to="/schedule">Расписание занятий</NavLink></li>
                <li><NavLink to="/sporttypes">Направления</NavLink></li>
                <li><NavLink to="/subscription">Абонементы</NavLink></li>
                <li><NavLink to="/coach">Наша команда</NavLink></li>
            </ul>
            <div className="social">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
        </div>
    )
}