import './portfolio.css';
import advance from '../assets/advance.jpg';
import cover from '../assets/portfolio-cover.jpg';
import { IoIosArrowDown } from 'react-icons/io';

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <div className="portfolio__heading section-heading">
                <h1 className="section-heading__title">Portfolio</h1>
                <img src={cover} alt="Cabecera del portfolio" className="section-heading__img" />
                <p className="section-heading__description">Aquí podrás encontrar todos mis trabajos realizados. Click en el trabajo para ver más detalles.</p>
                <IoIosArrowDown />
            </div>

            <div className="projects">
                <div className="portfolio__cards">
                    <div className="portfolio__cards-single">
                        <img src={advance} alt="" />
                        <div className="portfolio__cards-single-content">
                            <h3>Nombre del proyecto</h3>
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
