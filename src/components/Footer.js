import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineMobile } from 'react-icons/ai';
import './Footer.css';


export default function Footer() {
    return (
        <footer>
            <h3 className="footer__title">Contacta conmigo</h3>
            <ul className="contact-options">
                <li> <a href="mailto:hola@angymosi.com"><MdOutlineMailOutline /> hola@angymosi.com</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=34620179183&text=Hola,%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n" target="_blank" rel="nofollow noreferrer"><AiOutlineMobile /> 620 179 183</a> </li>
            </ul>
        </footer>
    )
}
