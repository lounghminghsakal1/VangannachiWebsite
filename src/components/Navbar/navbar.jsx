import vangannachiLogo from '../../assets/vangannachiLogo.jpg';
import hamBurgerIcon from '../../assets/burger-bar.png';
import { useState } from 'react';

const Navbar = function () {

    const [isOpen,setIsOpen] = useState(false);

    return(
        <div>
            <div className="bg-green-700 h-14 flex flex-wrap justify-center items-center md:flex-wrap md:justufy-start lg:flex-wrap lg:justify-start">
                <div className="flex items-center justify-around md:ml-36 md:w-80 lg:ml-36 lg:w-80">
                    🎁<p className="text-white font-semibold text-sm cursor-pointer">Get exclusive Deals Only on WhatsApp Channel - Join Now</p>    
                </div>
            </div>
            <nav className="bg-white flex justify-around gap-4 p-2 sticky top-0 z-50">
                <div className='flex justify-center items-center sm:hidden' onClick={() => setIsOpen(true)}>
                    <p><img src={hamBurgerIcon} alt="" className='w-8'/></p>
                </div>

                <div className={` fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${ isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
                    <div className='flex bg-green-600 h-16 items-center justify-around'>
                        <div className='flex gap-4'>
                            <a href="#" className='cursor-pointer text-white'>Menu</a>
                            <a href="#" className='cursor-pointer text-white'>Categories</a>
                        </div>
                        <button onClick={() => setIsOpen(false)}>✖️</button>
                    </div>
                    
                    {isOpen && (
                        <ul className="flex flex-col justify-evenly items-center">
                            <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Home</a></li>
                            <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Categories</a></li>
                            <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Contact</a></li>
                        </ul>
                    )}

                </div>

                <div>
                    <img src={vangannachiLogo} alt="vangannachi Website Logo" className='w-60' />
                </div>
                <div className='hidden sm:flex'>
                    <ul className="flex justify-evenly items-center">
                            <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Home</a></li>
                            <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Categories</a></li>
                            <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Contact</a></li>
                        </ul>
                </div>
                <div className="flex justify-center items-center">
                    <p className="p-4 cursor-pointer">&#128269;</p>
                    <p className="p-4 cursor-pointer hidden sm:flex">&#128100;</p>
                    <p className="p-4 cursor-pointer">&#128092;</p>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

