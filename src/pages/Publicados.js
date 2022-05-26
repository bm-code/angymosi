import advance from '../assets/advance.jpg';
import cover from '../assets/portfolio-cover.jpg';
import { IoIosArrowDown } from 'react-icons/io';

export default function Publicados() {
    return (
        <section className='publicados'>
            <div className="publicados__heading section-heading">
                <h1 className="section-heading__title">Trabajos publicados</h1>
                <img src={cover} alt="Cabecera de los trabajos publicados" className="section-heading__img" />
                <p className="section-heading__description">Aquí podrás encontrar todos mis trabajos publicados. Click en el trabajo para ver más detalles.</p>
                <IoIosArrowDown />
            </div>

            <div className="projects">
                <div className="portfolio__cards">
                    <div className="portfolio__cards-single">
                        <img src={advance} alt="" />
                        <div className="portfolio__cards-single-content">
                            <h3>Nombre del trabajo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis necessitatibus.</p>
                            <div className="card__meta">
                                <p className="card__meta-date">01/01/2022</p>
                                <p className="card__meta-category">Categoría</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
