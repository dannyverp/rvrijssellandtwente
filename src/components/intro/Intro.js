import './Intro.scss';
import React from 'react'
import redlogowhite from './../../images/redlogowhite.png'


function Intro() {
    return (
        <section className="intro">
            <article className="intro__container">
                <header className="intro__header">
                    <img src={redlogowhite} alt="" className="intro__logo"/>
                </header>
                <div className="intro__content-container">
                    <h2 className="intro__title">Regionale Voorzieningen Reddingsbrigades</h2>
                    <h3 className="intro__subtitle">IJsselland-Twente</h3>
                    <p className="intro__body">Een samenwerkingsverband tussen 8 reddingsbrigades in de veiligheidsregio's IJsselland en Twente</p>
                </div>
                <footer className="intro__footer">
                    <a href="/" className="intro__read-more">Lees verder</a>
                </footer>
            </article>
        </section>
    );
}

export default Intro;
