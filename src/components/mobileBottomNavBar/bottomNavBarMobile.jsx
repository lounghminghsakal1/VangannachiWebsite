import homeIcon from '../../assets/homeIcon.png';
import userIcon from '../../assets/user.png';
import shopIcon from '../../assets/shop.png';
import shoppingBagIcon from '../../assets/shopping-bag.png';


const BottomNavBar = function() {
    return(
        <div className="flex justify-around border-2 box-border gap-20 w-full sm:hidden sticky inset-0  bg-white z-10">
            <div className='flex flex-col justify-center items-center'>
                <img src={homeIcon} alt="" className='w-8 p-1'/>
                <p>Home</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={userIcon} alt="" className='w-8 p-1'/>
                <p>Account</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={shopIcon} alt="" className='w-8 p-1'/>
                <p>Shop</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={shoppingBagIcon} alt="" className='w-8 p-1'/>
                <p>Cart</p>
            </div>
        </div>
    )
}

export default BottomNavBar;