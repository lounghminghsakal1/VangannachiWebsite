

const Navbar = function () {
    return(
        <div>
            <div className="bg-green-700 h-14 flex justify-center align-center py-4">
                <p className="text-white">(gift icon) Get exclusive Deals Only on WhatsApp Channel - Join Now</p>
            </div>
            <nav className="bg-white-600 flex justify-around border-4">
                <div className="p-4">ICON and Name</div>
                <ul className="flex justify-evenly">
                    <li className="p-4"><a href="#">Home</a></li>
                    <li className="p-4"><a href="#">Categories</a></li>
                    <li className="p-4"><a href="#">Contact</a></li>
                </ul>
                <div className="flex justify-center">
                    <p className="p-4">&#128269;</p>
                    <p className="p-4">person ICON</p>
                    <p className="p-4">bag ICON</p>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

