import { Routes, Route, Link } from 'react-router-dom';
import './Header.css'
import logo from '../assets/logo.svg'
import { HiChevronRight } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai'

export default function Header() {
    return (
        <header>
            <input type="checkbox" id="burger" />
            <label htmlFor="burger" className="burger">
                <div></div>
                <div></div>
                <div></div>
            </label>
            <nav className='main-nav'>
                <ul>
                    <li><a className='main-nav__item' href="google.com">Inicio <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                    <li><a className='main-nav__item' href="google.com">Marca personal <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                    <li><a className='main-nav__item' href="google.com">Sobre mí <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                    <li><a className='main-nav__item' href="google.com">Servicios <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                    <li><a className='main-nav__item' href="google.com">Publicados <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                    <li><a className='main-nav__item' href="google.com">Portfolio <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                    <li><a className='main-nav__item' href="google.com">Formaciones <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                    <li><a className='main-nav__item' href="google.com">Opiniones <span className='main-nav__item-icon'><HiChevronRight /></span> </a></li>
                </ul>
            </nav>
            <div className="logo">
                <img src={logo} alt="Logo Angy Morales" title="Logo Angy Morales" />
            </div>
            <a href="google.com" className='contacto-header'><AiOutlineWhatsApp /></a>
        </header>
    )
}
