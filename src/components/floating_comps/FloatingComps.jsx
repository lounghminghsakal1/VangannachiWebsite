import watsappIcon from '../../assets/whatsappLogo.png';

const FloatingComps = function () {
    return (
        <div className='flex flex-col absolute b-0 r-0'>
            <div className='flex'>
                <button className='bg-white p-2 shadow-md rounded full'>Chat with us</button>
                <p>✖️</p>
            </div>
            <img src={watsappIcon} alt="" className='w-8 h-8 rounded-full '/>
        </div>
    );
}

export default FloatingComps;