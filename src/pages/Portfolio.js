import './portfolio.css'

import { IoIosArrowDown } from 'react-icons/io'

export default function Portfolio() {
    return (
        <section className="section-heading">
            <h1 className="section-heading__tite">Portfolio</h1>
            <img src="#" alt="Cabecera del portfolio" className="section-heading__img" />
            <p className="section-heading__description">Aquí podrás encontrar todos mis trabajos realizados. Click en el trabajo para ver más detalles.</p>
            <IoIosArrowDown />
        </section>
    )
}
