import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Estates from "../Estates/Estates";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Properties = () => {

    const [property, setProperty] = useState([]);

    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setProperty(data));
    })
    return (
        <div className="font-roboto">
                <Helmet>
                    <title>LuXeHome | Properties</title>
                    <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
                </Helmet>
                
            <div className="container mx-auto w-10/12 lg:w-4/5">
                <div className="text-center my-10">
                    <h2 className="text-4xl lg:text-4xl font-semibold mt-8 lg:mt-6">Provided Properties</h2>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                >
                    {property.map((estate) => (
                        <SwiperSlide key={estate.id}>
                            <Estates estate={estate} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Properties;