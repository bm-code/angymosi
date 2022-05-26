import { Link, Route, Routes } from "react-router-dom";
import './Header.css'
import logo from '../assets/logo.svg'
import { HiChevronRight } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai'
// Pages
import Inicio from '../pages/Inicio'
import MarcaPersonal from '../pages/MarcaPersonal'
import SobreMi from '../pages/SobreMi'
import Servicios from '../pages/Servicios'
import Publicados from '../pages/Publicados'
import Portfolio from '../pages/Portfolio'
import Formaciones from '../pages/Formaciones'
import Opiniones from '../pages/Opiniones'


export default function Header() {
    return (
        <>
            <header>
                <input type="checkbox" id="burger" />
                <label htmlFor="burger" className="burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
                <nav className='main-nav'>
                    <ul>
                        <li>
                            <Link to='/' className='main-nav__item'>
                                Inicio <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/marca-personal' className='main-nav__item'>
                                Marca personal <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/sobre-mi' className='main-nav__item'>
                                Sobre mí <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/servicios' className='main-nav__item'>
                                Servicios <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/trabajos-publicados' className='main-nav__item'>
                                Publicados <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/portfolio' className='main-nav__item'>
                                Portfolio <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/formaciones' className='main-nav__item'>
                                Formaciones <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/opiniones' className='main-nav__item'>
                                Opiniones <span className='main-nav__item-icon'><HiChevronRight /></span>
                            </Link>
                        </li>
                    </ul>
                </nav>


                <div className="logo">
                    <img src={logo} alt="Logo Angy Morales" title="Logo Angy Morales" />
                </div>
                <a href="google.com" className='contacto-header'><AiOutlineWhatsApp /></a>
            </header>
            <Routes>
                <Route path="/" element={<Inicio />} />
                {/* <Route path="marca-personal" element={<MarcaPersonal />} /> */}
                {/* <Route path="sobre-mi" element={<SobreMi />} /> */}
                {/* <Route path="servicios" element={<Servicios />} /> */}
                <Route path="trabajos-publicados" element={<Publicados />} />
                <Route path="portfolio" element={<Portfolio />} />
                {/* <Route path="formaciones" element={<Formaciones />} /> */}
                {/* <Route path="opiniones" element={<Opiniones />} /> */}
            </Routes>
        </>
    )
}
