import './NavBar.css';
import { NavLink } from "react-router-dom"
import navLogo from './NavLogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


export const NavBar = (props) => {
    const auth = useContext(AuthContext)
    const { isAuthenticated } = props
    const Login = () => {
        if (!isAuthenticated) {
            return (
                <div className="Auth">
                    <NavLink to="/adminAuth">Войти тренеру</NavLink>
                    <NavLink to="/clientAuth">Войти клиенту</NavLink>
                </div>
            )
        }
        return (
            <div className="Auth">
                <button type="submit" className="btn btn-primary" onClick={logoutHandler}>Выйти</button>
            </div>
        )
    }
    const logoutHandler = () =>{
        auth.logout()
    }

    return (
        <div className="navbar">
            <img src={navLogo} alt="htllo" />
            <ul>
                <li><NavLink to="/about">О нас</NavLink></li>
                <li><NavLink to="/schedule">Расписание занятий</NavLink></li>
                <li><NavLink to="/sporttypes">Направления</NavLink></li>
                <li><NavLink to="/subscription">Абонементы</NavLink></li>
                <li><NavLink to="/coach">Наша команда</NavLink></li>
            </ul>
            <Login />
            <div className="social">
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
        </div>
    )
}