import homeIcon from '../assets/homeIcon.png';

const BottomNavBar = function() {
    return(
        <div className="flex justify-around border-2 gap-20 mx-4 sm:hidden sticky inset-0  bg-white z-10">
            <div className='flex flex-col justify-center items-center'>
                <img src={homeIcon} alt="" className='w-8'/>
                <p>Home</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={homeIcon} alt="" className='w-8'/>
                <p>Account</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={homeIcon} alt="" className='w-8'/>
                <p>Shop</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={homeIcon} alt="" className='w-8'/>
                <p>Cart</p>
            </div>
        </div>
    )
}

export default BottomNavBar;