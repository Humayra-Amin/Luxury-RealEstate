import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="font-roboto">
            <Helmet>
                <title>LuXeHome | About</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
            </Helmet>

            <div className="text-center my-10">
                <h2 className="text-4xl lg:text-4xl font-semibold mt-8 lg:mt-20">About</h2>
            </div>

            <div className="container mx-auto w-10/12 lg:w-4/5 text-center my-10 text-xl">

                <p className="font-sedan">Luxury Estates has quickly become a leading name in the luxury real estate market.Our journey began with a vision to redefine the real estate experience by providing unparalleled service, expertise,and personalized attention to each client. Since then, we have helped countless individuals, families, and investors achieve their real estate goals, guiding them through every step of the process with integrity, professionalism, and dedication.......<Link to='/aboutus' className="text-blue-700 hover:underline">See More</Link></p>

            </div>

        </div>
    );
};

export default About;