import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg'
import useAuth from "../../hooks/useAuth";

const Navbar = () => {

    const { logout, user } = useAuth();

    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? 'text-blue-500 border-2 border-blue-500' : 'text-black'}>Home</NavLink></li>
        <li><NavLink to="/aboutus" className={({ isActive }) =>
            isActive ? 'text-blue-500 border-2 border-blue-500' : 'text-black'}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
            isActive ? 'text-blue-500 border-2 border-blue-500' : 'text-black'}>Contact</NavLink></li>
        <li><NavLink to="/updateprofile" className={({ isActive }) =>
            isActive ? 'text-blue-500 border-2 border-blue-500' : 'text-black'}>Update Profile</NavLink></li>
        {user && <li><NavLink to="/userprofile" className={({ isActive }) =>
            isActive ? 'text-blue-500 border-2 border-blue-500' : 'text-black'}>User Profile</NavLink></li>}
    </>

    return (
        <div className="mx-auto">
            <div className="navbar bg-slate-50 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <div className="flex-1">
                        <Link to='/'><img src={logo} alt="" className="lg:ml-0 ml-2 w-[500px] lg:w-[200px] md:w-[200px]" /></Link>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:gap-4 lg:mr-20 lg:text-xl">
                        {links}
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    {
                        user?.email ? <div className="dropdown dropdown-end ml-44">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-[-150px] lg:ml-[0px] md:ml-[0px]">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://i.ibb.co/BV0NHW2/pics.jpg"} />
                                </div>
                            </div>

                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-start">

                                <li>
                                    <button className="btn btn-sm btn-ghost">{user?.displayName || 'Not found'}</button>
                                </li>

                                <li>
                                    <button onClick={logout} className="btn btn-sm btn-ghost">LOGOUT</button>
                                </li>

                            </ul>

                        </div>
                            :
                            <Link to="/login" className="form-control">
                                <button className="btn bg-blue-500 text-white ml-[20px] lg:ml-[0px] md:ml-[0px]">LOGIN</button>
                            </Link>
                    }


                </div>

            </div>
        </div>
    );
};

export default Navbar; 