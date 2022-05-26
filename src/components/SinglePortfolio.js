import './SinglePortfolio.css';
import cover from '../assets/portfolio-cover.jpg';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import image1 from '../assets/gallery1.jpg';
import image2 from '../assets/gallery2.jpg';
import image3 from '../assets/gallery3.jpg';

export default function SinglePortfolio() {
    return (
        <section className="single-portfolio">
            <div className="single-portfolio__header section-heading">
                <h1 className="section-heading__title">Project Title</h1>
                <img src={cover} alt="Cabecera del portfolio" className="section-heading__img" />
                <p className="section-heading__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus voluptate non esse dolorum eligendi dolor cum, minima voluptas repellat eius, assumenda numquam commodi.</p>
                <IoIosArrowDown />
                <div className="single-portfolio__categories">
                    <ul>
                        <li><AiOutlineFolderOpen /> Categoría 1</li>
                        <li><AiOutlineFolderOpen /> Categoría 2</li>
                        <li><AiOutlineFolderOpen /> Categoría 3</li>
                    </ul>
                </div>
            </div>

            <div className="single-portfolio__gallery">

                <div className="single-portfolio__gallery-first">
                    <div className="gallery__img">
                        <img src={image1} alt="" />
                    </div>
                    <div className="gallery__img-vertical">
                        <div className="gallery__img">
                            <img src={image2} alt="" />
                        </div>
                        <div className="gallery__img">
                            <img src={image3} alt="" />
                        </div>
                    </div>
                </div>

                <div className="single-portfolio__gallery-second">
                    <div className="gallery__img-left">
                        <div className="gallery__img"><img src={image2} alt="" /></div>
                        <div className="gallery__img"><img src={image3} alt="" /></div>
                    </div>
                    <div className="gallery__img"><img src={image1} alt="" /></div>
                </div>
            </div>
        </section>
    )
}
