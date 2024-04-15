import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import aboutpic from '../../assets/images/waterfront_mansion.jpg'

const About = () => {
    return (
        <div className="font-roboto container mx-auto w-10/12 md:w-4/5 lg:w-4/5 text-center my-24 text-xl flex flex-col md:flex-col lg:flex-row">
            <Helmet>
                <title>LuXeHome | About</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
            </Helmet>

            <div>
                <img src={aboutpic} alt="" className="rounded-lg shadow-lg h-[200px] md:w-[900px] md:h-[400px] lg:w-[900px] lg:h-[400px]" data-aos="fade-right" data-aos-duration="1000" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className="mx-auto w-10/12 md:w-4/5 lg:w-4/5 my-10 text-xl ml-10">

                <h2 className="text-4xl lg:text-4xl font-semibold mb-10">About Company</h2>

                <p className="font-sedan text-start text-xl md:text-center lg:text-center">Luxury Estates has quickly become a leading name in the luxury real estate market.Our journey began with a vision to redefine the real estate experience by providing unparalleled service,expertise and personalized attention to each client. Since then,we have helped countless individuals, families, and investors achieve their real estate goals, guiding them through every step of the process with integrity, professionalism, and dedication.......<Link to='/aboutus' className="text-blue-700 hover:underline">See More</Link></p>

            </div>

        </div>
    );
};

export default About;