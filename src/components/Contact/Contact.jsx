import { Helmet } from 'react-helmet-async';
import contact from '../../assets/images/contact.jpg'
import contact2 from '../../assets/images/contact2.jpg'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>LuXeHome | Contact</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
            </Helmet>
            <div className="min-h-screen">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-roboto border-2 lg:p-4 bg-blue-400 text-white">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-aos="fade-right" data-aos-duration="1000" className="bg-white p-6 rounded-lg border-2">
                            <h2 className="text-2xl font-semibold mb-4 font-roboto">Send Us a Message</h2>

                            <form>

                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-600">Your Name</label>
                                    <input type="text" id="name" name="name" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-600">Your Email</label>
                                    <input type="email" id="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-600">Message</label>
                                    <textarea id="message" name="message" rows="5" className="w-full mt-1 p-2 border border-gray-300 rounded-md"></textarea>
                                </div>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send Message</button>

                                <div>
                                    <p className='text-slate-500 mt-2'>Got a question? Need assistance? Contact our friendly team today!</p>
                                    <p className='text-slate-500'>Our team is here to help. Reach out to us anytime for assistance or inquiries.</p>

                                    <img src={contact2} alt="" className='rounded-lg mt-2 h-[200px] w-[400px] md:h-[400px] md:w-auto lg:h-auto' />
                                </div>
                            </form>

                        </div>


                        <div data-aos="fade-left" data-aos-duration="1000" className="bg-white p-6 rounded-lg border-2">
                            <h2 className="text-2xl font-semibold mb-4 font-roboto">LuXe Home Real Estate</h2>
                            <ul>
                                <li className="mb-2">
                                    <h1 className="font-semibold">123 Main St, Chittagong, Bangladesh</h1>
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Phone:</span> +8801875469911
                                </li>
                                <li className="mb-2">
                                    <span className="font-semibold">Email:</span> LuXeHome@example.com
                                </li>
                                <p className='text-slate-500'>Our intuitive platform empowers you to explore a wide range of properties, from cozy apartments to luxurious villas, with ease. With our innovative geolocation mapping feature, you can effortlessly discover properties that match your criteria and connect directly with property owners. At WP Residence, we're more than just a real estate platform we're your trusted partners throughout your real estate journey. Our team brings a wealth of expertise to the table, guiding you through every step of the buying or selling process. From exploring the latest real estate trends to providing personalized insights, we're committed to helping you make informed decisions.
                                    Whether you're a first-time home buyer or a seasoned investor, we're dedicated to providing exceptional service tailored to your unique needs. Get in touch with us today to start your journey towards finding your dream home or maximizing the potential of your property investment. We look forward to hearing from you!</p>
                                <div>
                                    <img src={contact} alt="" className='h-[200px] md:h-auto lg:h-auto mt-6 rounded-lg' />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;