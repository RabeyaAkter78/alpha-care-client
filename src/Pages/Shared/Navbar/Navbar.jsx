import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Doctors', link: '/doctors' },
        { name: 'About', link: '/about' },
        { name: 'Service', link: '/service' },
        { name: 'Help Line', link: '/help line' },
        { name: 'Appointment', link: '/appointment' }
    ];

    const handleItemClick = (item) => {
        setActiveLink(item.link);
    };

    return (
        <div className=''>
            <div className="navbar bg-teal-950 text-orange-200 font-bold ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems.map(item => (
                                <li key={item.name} onClick={() => handleItemClick(item)} className='text-teal-900' >
                                    <a href={item.link} className={activeLink === item.link ? "border-b-2 border-teal-900" : ""}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a href="/">
                        <img className="rounded" src="https://i.postimg.cc/zD9NJPRp/logo.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(item => (
                            <li key={item.name} onClick={() => handleItemClick(item)}>
                                <a href={item.link} className={activeLink === item.link ? "text-orange-200 border-b-2 border-orange-200 " : ""}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;