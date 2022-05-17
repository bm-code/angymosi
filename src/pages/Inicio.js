import angy from '../assets/angy.jpg'
import about from '../assets/about.jpg'
import onlymonday from '../assets/onlymonday.jpg'
import goji from '../assets/goji.jpg'
import brandleft from '../assets/brandleft.jpg'
import brandright from '../assets/brandright.jpg'
import advance from '../assets/advance.jpg'
import skin from '../assets/skin.jpg'
import fullhair from '../assets/fullhair.jpg'
import './Inicio.css'

export default function Inicio() {
    return (
        <main>
            <section className="heading">
                <h1 className="heading__title">Angy <span className="small-title">Morales Silva</span></h1>
                <img src={angy} alt="Foto de Angy Morales" className="heading__img" />
            </section>

            <section className="about">
                <div className="about__img">
                    <img src={about} alt="Foto de Angy Morales Maquillando" />
                </div>
                <div className="about__content">
                    <h2 className="about__content-title">Sobre mí</h2>
                    <p>Hola, mi nombre es Angy, soy maquilladora y hairstyler profesional.</p>
                    <ul className="about__content-list">
                        <li>Maquillaje para boddas y eventos</li>
                        <li>Maquillaje editorial y beauty</li>
                        <li>Cursos de automaquillaje</li>
                    </ul>
                </div>
            </section>

            <section className="published">
                <div className="published__content">
                    <h2 className="published__content-title">Trabajos publicados</h2>
                    <p>Varias de las editoriales en las que he participado a lo largo de estos últimos añós se han publicado en revistas. Algunos de ellos podemos encontrarlos en la portada.</p>
                </div>
                <div className="published__images">
                    <img src={onlymonday} alt="" />
                    <img src={onlymonday} alt="" />
                    <img src={goji} alt="" />
                    <img src={goji} alt="" />
                </div>
                <button href="google.com" className="btn__more"> <span className="button__top">Ver más</span></button>
            </section>

            <section className="brand">
                <div className="brand__content">
                    <h2 className="brand__content-title">Marca personal</h2>
                    <p className="brand__content-subtitle"><b>Seña de identidad</b></p>
                    <p>Creo que es muy buena señal cuando ves un trabajo y sabes inmediatamente de quién es, porque tiene ese algo especial que te recuerda al artista en cuestión. Ese es mi camino.</p>
                </div>
                <div className="brand__images">
                    <div className="brand__images-left">
                        <img src={brandleft} alt="" />
                        <img src={brandleft} alt="" />
                    </div>
                    <div className="brand__images-right">
                        <img src={brandright} alt="" />
                    </div>
                </div>
                <button href="google.com" className="btn__more"> <span className="button__top">Ver más</span></button>

            </section>

            <section className="formations">
                <div className="formations__content">
                    <h2 className="formations__content-title">Formaciones</h2>
                    <p>Con el fin de ampliar y mejorar todo lo posible mi perfil profesional, en esta última etapa he cursado diversas formaciones.</p>
                </div>
                <div className="formations__cards">
                    <div className="formations__cards-single">
                        <img src={advance} alt="" />
                        <h3>Advance & Beauty</h3>
                    </div>
                    <div className="formations__cards-single">
                        <img src={skin} alt="" />
                        <h3>Skin master</h3>
                    </div>
                    <div className="formations__cards-single">
                        <img src={fullhair} alt="" />
                        <h3>Full hair</h3>
                    </div>
                </div>
            </section>

            <section className="portfolio">
                <div className="portfolio__content">
                    <h2 className="portfolio__content-title">Mi portfolio</h2>
                    <p>Echa un vistazo a todos mis trabajos</p>
                </div>
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
                <button href="google.com" className="btn__more"> <span className="button__top">Ver más</span></button>
            </section>

        </main>
    )
}
