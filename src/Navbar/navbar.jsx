import vangannachiLogo from '../assets/vangannachiLogo.jpg';

const Navbar = function () {
    return(
        <div>
            <div className="bg-green-700 h-14 flex flex-wrap justify-center items-center md:flex-wrap md:justufy-start lg:flex-wrap lg:justify-start">
                <div className="flex items-center justify-around md:ml-36 md:w-80 lg:ml-36 lg:w-80">
                    🎁<p className="text-white font-semibold text-sm cursor-pointer">Get exclusive Deals Only on WhatsApp Channel - Join Now</p>    
                </div>
            </div>
            <nav className="bg-white-600 flex justify-around p-2">
                <div>
                    <img src={vangannachiLogo} alt="vangannachi Website Logo" className='w-60' />
                </div>
                <ul className="flex justify-evenly items-center">
                    <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Home</a></li>
                    <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Categories</a></li>
                    <li className="p-4"><a href="#" className='cursor-pointer hover:text-green-600 font-semibold'>Contact</a></li>
                </ul>
                <div className="flex justify-center items-center">
                    <p className="p-4 cursor-pointer">&#128269;</p>
                    <p className="p-4 cursor-pointer">&#128100;</p>
                    <p className="p-4 cursor-pointer">&#128092;</p>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

