import React from 'react';
import './main.css';

// icons
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

// image
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';

// array
const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$5000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Banda Neira Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$7500',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$4499',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Raja Ampat',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$4999',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Jeju Island',
        location: 'South Korea',
        grade: 'CULTURAL RELAX',
        fees: '$4800',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Borobudur Temple',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$2500',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Komodo Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$3900',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$3500',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$2999',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$3000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis mauris elit, vitae vestibulum justo congue in. Integer pulvinar elit ac interdum convallis. Cras ut urna risus. In ut velit.'
    },

];

const Main = () => {
    return (
        <section className='main container section'>

            <div className="sec-title">
                <h3 className="title">Most visited destinations</h3>
            </div>

            <div className="sec-content grid">
                {/* mapping array */}
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} className="single-destination">

                                <div className="img-div">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="card-info">
                                    <h4 className="dest-title">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>DETAILS <HiOutlineClipboardCheck className='icon' /></button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Main;