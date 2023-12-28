import { useEffect, useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdCloseCircle } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import './header.css'

const Header = () => {

    // State to manage the open/close state of the mobile menu
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme])


    return (
        <div>

            {/* Main Header Section */}
            <header className='flex justify-between items-center px-[2.4rem] mt-2'>
                {/* Button to toggle the mobile menu */}
                <button onClick={() => setIsOpen(true)} className='menu'><IoMdArrowDropdownCircle className='text-2xl' /></button>

                {/* Placeholder div */}
                <div></div>

                {/* Navigation links */}
                <nav>
                    <ul className='flex justify-center items-center gap-5 '>
                        <li><a href="">About</a></li>
                        <li><a href="">Article</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Speking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>

                {/* Button for a light theme  */}
                <button onClick={() => {

                    localStorage.setItem('currentMode', theme === 'dark' ? 'light' : 'dark');
                    setTheme(localStorage.getItem('currentMode'));

                }} className='text-xl btn btn-sm rounded-full'>
                    <span className='moon'>{theme === "dark" ? <BsFillMoonStarsFill /> : <MdWbSunny />}</span>
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='fixed'>
                        <ul className='showModal'>
                            {/* Close button for the mobile menu */}
                            <li className='border text-2xl'><button onClick={() => setIsOpen(false)}><IoMdCloseCircle /></button></li>
                            {/* Navigation links for the mobile menu */}
                            <li><a href="">About</a></li>
                            <li><a href="">Article</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Speking</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                )}

            </header>

        </div>
    );
};

export default Header;
