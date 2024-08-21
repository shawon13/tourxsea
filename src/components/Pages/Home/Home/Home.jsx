import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Parallax, Navigation } from 'swiper/modules';
// import Banar from '../Banar/Banar';
import { Link, useLoaderData } from 'react-router-dom';
import TouristsSpot from '../TouristsSpot/TouristsSpot';
import Countries from '../Countries/Countries';
const toursLoad = 6;
const Home = () => {
    const banars = [
        {
            "id": 1,
            "img": "https://i.ibb.co/WFFLyfH/bangladesh.png",
            "title": "Travel to Bangladesh",
            "dis": "Bangladesh offers many tourist attractions, including archaeological sites, historical mosques and monuments, longest natural beach in the world, picturesque landscape, hill forests and wildlife, rolling tea gardens and tribes. Tourists find the rich flora and fauna and colorful tribal life very enchanting."
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/6r0yVqh/thailan.png",
            "title": "Travel to Thailand",
            "dis": "Thailand is a vibrant destination known for its rich cultural heritage, iconic temples, and bustling cities like Bangkok and Chiang Mai. The country’s stunning beaches and islands, such as Phuket and Krabi, offer idyllic escapes. Thailand's natural landscapes, including lush jungles and majestic mountains, provide adventure opportunities."
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/ssy77xc/indonesia.png",
            "title": "Travel to Indonesia",
            "dis": "Indonesia offers stunning landscapes, from the beaches of Bali and Lombok to the lush rainforests of Sumatra and Borneo. Explore ancient temples like Borobudur and Prambanan, and discover vibrant cities such as Jakarta and Yogyakarta. The archipelago is also renowned for its diverse wildlife and marine biodiversity."
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/njgz0S8/malaysia.png",
            "title": "Travel to Malaysia",
            "dis": "Malaysia offers vibrant cities like Kuala Lumpur with its iconic Petronas Towers and bustling markets. Experience the stunning natural beauty from Borneo’s rainforests to Langkawi’s beaches and the cultural heritage of Malacca and Penang. The unique blend of Malay, Chinese, and Indian cultures, along with the rich culinary scene, makes Malaysia a delightful destination."
        },
        {
            "id": 5,
            "img": "https://i.ibb.co/ZHr34Sd/vietnam.png",
            "title": "Travel to Vietnam",
            "dis": "Vietnam offers a blend of bustling cities like Hanoi and Ho Chi Minh City, alongside serene landscapes such as Halong Bay and the Mekong Delta. Explore ancient temples, historic sites, and enjoy the country’s rich cultural heritage. With its vibrant street food scene and warm hospitality, Vietnam is a captivating destination for travelers."
        },
        {
            "id": 6,
            "img": "https://i.ibb.co/BsmgxSW/combodia.png",
            "title": "Travel to Cambodia",
            "dis": "Cambodia is home to the ancient Angkor Wat temples, a UNESCO World Heritage site and a testament to the country’s rich history. Explore the vibrant capital of Phnom Penh, with its stunning royal palace and bustling markets. From pristine beaches to cultural landmarks, Cambodia offers a unique blend of natural beauty and historical intrigue."
        }

    ]
    const tours = useLoaderData();
    const [next, setNext] = useState(toursLoad);
    const handleTourMore = () => {
        setNext(next + toursLoad)
    }
    // countries
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <>
            {/* Banar Start */}
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Navigation]}
                className="mySwiper"
            >
                {
                    banars.map(banar => <SwiperSlide key={banar.id}>
                        <div style={{ padding: '142px 0px' }}>
                            <div
                                slot="container-start"
                                className="parallax-bg"
                                style={{
                                    'background-image':
                                        `url(${banar.img})`,

                                }}
                                data-swiper-parallax="-23%"
                            ></div>
                            <div className="title ml-20" data-swiper-parallax="-300">
                                <h4 className='text-6xl font-bold'>{banar.title}</h4>
                            </div>
                            <div className="text ml-20" data-swiper-parallax="-100">
                                <div className='my-5 rounded-md shadow-2xl p-3' style={{ backgroundColor: '#a0afb399' }}>
                                    <p className='text-base'>
                                        {banar.dis}
                                    </p>
                                </div>
                                <Link><button className='btn btn-nature'>More Details</button></Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            {/* Banar End */}
            {/* Tourists Spot Start */}
            <section className='px-20 my-20'>
                <div className='mb-14'>
                    <h2 className='text-center text-4xl font-semibold mb-3'>Tourists Spot</h2>
                    <p className='w-3/4 mx-auto text-center'> Is a must-visit destination, known for its stunning natural landscapes and vibrant local culture. Explore its iconic landmarks, enjoy scenic hikes, and experience the rich history that defines this unique location. Perfect for both relaxation and adventure, it offers a memorable escape into nature and tradition.</p>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        tours.slice(0, next).map(tour => <TouristsSpot key={tour._id} tour={tour}></TouristsSpot>)
                    }
                </div>
                {
                    next < tours.length && <div className='text-center'>
                        <button onClick={handleTourMore} className='btn btn-outline text-2xl mt-10'>More Tour</button>
                    </div>
                }

            </section>
            {/* Tourists Spot End */}
            {/* Tourists Country Spot Start */}
            <section className='px-20 my-20'>
                <div className='mb-14'>
                    <h2 className='text-center text-4xl font-semibold mb-3'>Tourists Spot</h2>
                    <p className='w-3/4 mx-auto text-center'> Is a must-visit destination, known for its stunning natural landscapes and vibrant local culture. Explore its iconic landmarks, enjoy scenic hikes, and experience the rich history that defines this unique location. Perfect for both relaxation and adventure, it offers a memorable escape into nature and tradition.</p>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        countries.map(country => <Countries key={country._id} country={country}></Countries>)
                    }
                </div>
            </section>
            {/* Tourists Country Spot End */}
        </>
    );
}
export default Home;