import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../css/InnerHero.css';

import PreviewImg1 from '../images/Book1.png';
import PreviewImg2 from '../images/Book2.png';
import PreviewImg3 from '../images/Book3.png';
import PreviewImg4 from '../images/Book4.png';
import PreviewImg5 from '../images/Book5.png';
import PreviewImg6 from '../images/Book6.png';
import PreviewImg7 from '../images/Book7.png';
import PreviewImg8 from '../images/Book8.png';
import PreviewImg9 from '../images/Book9.png';
import PreviewImg10 from '../images/Book10.png';
import PreviewImg11 from '../images/Book11.png';
import PreviewImg12 from '../images/Book12.png';
import PreviewImg13 from '../images/Book1.png';
import PreviewImg14 from '../images/Book2.png';
import PreviewImg15 from '../images/Book3.png';
import PreviewImg16 from '../images/Book4.png';
import PreviewImg17 from '../images/Book5.png';
import PreviewImg18 from '../images/Book6.png';
import PreviewImg19 from '../images/Book7.png';
import PreviewImg20 from '../images/Book8.png';
import PreviewImg21 from '../images/Book9.png';
import PreviewImg22 from '../images/Book10.png';
import PreviewImg23 from '../images/Book11.png';
import PreviewImg24 from '../images/Book12.png';

const InnerHero = () => {
    const { user } = useContext(UserContext);
    const images = [
        PreviewImg1,
        PreviewImg2,
        PreviewImg3,
        PreviewImg4,
        PreviewImg5,
        PreviewImg6,
        PreviewImg7,
        PreviewImg8,
        PreviewImg9,
        PreviewImg10,
        PreviewImg11,
        PreviewImg12,
        PreviewImg13,
        PreviewImg14,
        PreviewImg15,
        PreviewImg16,
        PreviewImg17,
        PreviewImg18,
        PreviewImg19,
        PreviewImg20,
        PreviewImg21,
        PreviewImg22,
        PreviewImg23,
        PreviewImg24,
    ];

    const [tileImages, setTileImages] = useState(
        Array.from({ length: 24 }, () => Math.floor(Math.random() * images.length))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTileImages((prevImages) =>
                prevImages.map(() => Math.floor(Math.random() * images.length))
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="inner-hero">
            <header className="inner-header">
                <div className="tile-grid">
                    {tileImages.map((imageIndex, index) => (
                        <div
                            key={index}
                            className="tile"
                            style={{ backgroundImage: `url(${images[imageIndex]})` }}
                        ></div>
                    ))}
                </div>
                <div className="inner-header-content">
                    <h1 className="inner-header-title">Welcome, {user.username}.</h1>
                    <p className="inner-header-description">
                        Explore our library, download your favorites, or watch the stories come to life on{' '}
                        <a href="https://youtube.com" className="channel-link">
                            Globebooks
                        </a>{' '}
                        YouTube Channel.
                    </p>
                </div>
            </header>
        </section>
    );
};

export default InnerHero;