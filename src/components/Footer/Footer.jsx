import { useState } from 'react';
import logo from '../../assets/images/logo.jpg'
import { FaChevronUp, FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {

    const [chevron, setChevron] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleVisible = () => {
        if (window.pageYOffset > 300) {
            setChevron(true);
        }
        else {
            setChevron(false);
        }
    }

    window.addEventListener('scroll', toggleVisible);


    return (
        <div>
            <footer className="footer p-20 md:p-8 bg-slate-50 text-base-content mt-10">
                <aside>
                    <div className="flex-1">
                        <img src={logo} alt="" className="lg:ml-0 ml-2 w-[500px] lg:w-[200px] md:w-[200px]" />
                        <p className='text-xl font-sedan font-semibold mt-4'>Contact Our Agency</p>
                        <div className='flex flex-row justify-evenly mt-6 text-2xl text-blue-600'>
                            <FaGoogle></FaGoogle>
                            <FaTwitter></FaTwitter>
                            <FaInstagram></FaInstagram>
                            <FaFacebook></FaFacebook>
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title font-roboto text-[18px]">Services</h6>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Luxury Property Listings</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Property Management Services</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Investment Consultation</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Interior Design Services</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-roboto text-[18px]">Company</h6>
                    <Link to='/aboutus'><a className="link link-hover font-sedan font-medium text-[17px]">About us</a></Link>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Contact</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Our Team</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Careers</a>
                </nav>
                <nav>
                    <h6 className="footer-title font-roboto text-[18px]">Terms & Condition</h6>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Terms of services</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Privacy policy</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Cookie policy</a>
                    <a className="link link-hover font-sedan font-medium text-[17px]">Disclaimer</a>
                </nav>

                {chevron && (
                    <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-slate-400 p-2 rounded-full">
                        <FaChevronUp size={30}></FaChevronUp>
                    </button>
                )}

            </footer>

            <footer className="footer px-10 py-4 border-t bg-slate-50 text-base-content border-base-300 flex justify-center items-center">
                <aside>
                    <p>Copyright © 2024 - All right reserved by LUXE HOME Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;