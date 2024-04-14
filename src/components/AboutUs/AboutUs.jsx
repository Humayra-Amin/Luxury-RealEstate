import { Helmet } from "react-helmet-async";
import pics1 from '../../assets/images/pics1.jpg';
import pics2 from '../../assets/images/pics2.jpg';
import pics3 from '../../assets/images/pics3.jpg'


const AboutUs = () => {
    return (
        <div className="font-roboto">
            <Helmet>
                <title>LuXeHome | About</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
            </Helmet>

            <div className="text-center my-10">
                <h2 className="text-4xl lg:text-4xl font-semibold">About Us</h2>
            </div>

            <div className="container mx-auto w-10/12 lg:w-4/5 text-center my-10 text-xl">

                <div data-aos="fade-up" data-aos-duration="1000" className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={pics3} alt="Album" className="h-[200px] md:h-[500px] lg:w-[1800px] lg:h-[500px]" /></figure>
                    <div data-aos="fade-left" data-aos-duration="1000" className="card-body text-start">
                        <h2 className="text-3xl font-bold text-center">Our Story</h2>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">Luxury Estates has quickly become a leading name in the luxury real estate market. Our journey began with a vision to redefine the real estate experience by providing unparalleled service, expertise,and personalized attention to each client. Since then, we have helped countless individuals, families, and investors achieve their real estate goals, guiding them through every step of the process with integrity, professionalism, and dedication.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">Our commitment to excellence and client satisfaction has earned us a reputation as a trusted partner in the industry. As we continue to grow and evolve, we remain dedicated to our core values of integrity, transparency, and customer-centricity.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">We are proud of our accomplishments and look forward to serving you for many years to come.</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="card lg:card-side bg-base-100 shadow-xl mt-14">
                    <div data-aos="fade-right" data-aos-duration="1000" className="card-body text-start">
                        <h2 className="text-3xl font-bold text-center">Our Mission and Vision</h2>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">Our mission at Luxury Estates is to empower our clients to make informed decisions and achieve their real estate aspirations with confidence. We strive to provide exceptional service, deliver outstanding results, and exceed expectations at every turn.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">Our vision is to be the premier destination for luxury real estate, known for our unwavering commitment to excellence, integrity, and innovation. We aim to set new standards of quality, professionalism, and customer satisfaction in the industry.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">With a focus on innovation and continuous improvement, we are committed to staying ahead of the curve and adapting to the evolving needs of our clients and the market. Our goal is to remain a trusted advisor and partner to our clients, providing them with the guidance and support they need to achieve their real estate goals.</p>
                    </div>
                    <figure><img src={pics2} alt="Album" className="h-[200px] md:h-[500px] lg:w-[1800px] lg:h-[500px]" /></figure>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="card lg:card-side bg-base-100 shadow-xl mt-14">
                    <figure><img data-aos-duration="1000" src={pics1} alt="Album" className="h-[200px] md:h-[500px] lg:w-[2000px] lg:h-[500px]" /></figure>
                    <div data-aos="fade-left" className="card-body text-start">
                        <h2 className="text-3xl font-bold text-center">Our Philosophy</h2>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">At Luxury Estates, we believe that real estate is more than just buying or selling property; its about building relationships, creating opportunities, and realizing dreams. Thats why we approach every transaction with honesty, transparency, and integrity, ensuring our clients best interests are always our top priority.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">We are committed to fostering long-term partnerships based on trust, respect, and mutual success. By combining our expertise with a personalized approach, we strive to deliver unparalleled value and exceed our clients expectations every step of the way.</p>
                        <p className="text-[16px] md:text-xl lg:text-xl font-sedan">With a passion for excellence and a dedication to service, we are proud to be your trusted partner in all your real estate endeavors.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;