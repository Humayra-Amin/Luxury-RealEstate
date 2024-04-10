import { Link } from 'react-router-dom';
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mb-28">

                <div id="slide1" className="carousel-item relative w-full">

                    <div className='overlay'></div>

                    <img src={banner1} className="lg:w-[1500px] lg:h-[650px]" />

                    <div className="absolute md:inset-0 lg:inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Discover Your Dream Home</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold">Explore our collection of luxury properties</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❮</a>
                        <a href="#slide2" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❯</a>
                    </div>


                </div>

                <div id="slide2" className="carousel-item relative w-full">

                    <div className='overlay'></div>

                    <img src={banner2} className="lg:w-[1500px] lg:h-[650px]" />

                    <div className="absolute md:inset-0 lg:inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Your Dream Home Awaits</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold text-center">Unwind in the lap of luxury with our exclusive accommodations</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❮</a>
                        <a href="#slide3" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❯</a>
                    </div>

                </div>

                <div id="slide3" className="carousel-item relative w-full">

                    <div className='overlay'></div>

                    <img src={banner3} className="lg:w-[1500px] lg:h-[650px]" />

                    <div className="absolute md:inset-0 lg:inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold">Experience Unmatched Luxury</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold text-center">Find your perfect retreat in our collection of luxurious properties</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❮</a>
                        <a href="#slide4" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❯</a>
                    </div>

                </div>

                <div id="slide4" className="carousel-item relative w-full">

                    <div className='overlay'></div>

                    <img src={banner4} className="lg:w-[1500px] lg:h-[650px]" />

                    <div className="absolute md:inset-0 lg:inset-0 flex flex-col justify-center items-center text-white md:gap-8 lg:gap-8">
                        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold">Where Elegance Meets Comfort</h2>
                        <p className="text-[14px] md:text-xl lg:text-2xl font-bold text-center">Treat yourself to a lifestyle of luxury and indulgence</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❮</a>
                        <a href="#slide1" className="btn btn-circle mt-28 lg:mt-0 size-5 md:size-12 lg:size-12">❯</a>
                    </div>

                </div>

                <Link to="/properties" className='absolute ml-[90px] mt-[110px] md:ml-[300px] md:mt-[320px] lg:ml-[650px] lg:mt-[400px]'>
                    <button className='btn btn-primary'>View properties</button>
                </Link>

            </div>

        </div>
    );
};

export default Banner;