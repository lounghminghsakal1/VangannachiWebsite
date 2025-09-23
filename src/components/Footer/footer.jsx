import image from '../../assets/fssaiLogo.jpg';
import instaLogo from '../../assets/instaLogo.svg';
import youtubeLogo from '../../assets/youtubeLogo.png';
import whatsappLogo from '../../assets/whatsappLogo.png';
import { useState } from 'react';


const Footer = function () {
    
    const [isOpen, setisOpen] = useState(true);

    return (
        <div>
            <div className="flex flex-col mb-10 sm:flex-row">
                <div className="flex flex-col gap-4 mx-10 sm:flex-[1.5]">
                    <h2 className='font-semibold text-lg'>Contact us</h2>
                    <p>No 5 Karungadu Road, Pettai, Tirunelveli-627004, Tamil Nadu, India</p>
                    <p>+91 6385815500</p>
                    <p>vangaannachionline@gmail.com</p>
                    <p>Prepaid Orders : <span className='font-bold'>+916369599378</span> (Call/WhatsApp)</p>
                    <p>Courier Tracking/Courier Complaints: <span className='font-bold'>+919360757970</span> (Call/WhatsApp)</p>
                    <p>Bulk Business Enquiries/Direct Contact with Owner : <span className='font-bold'>+916385815500</span> (Call/WhatsApp)</p>
                    <div className='flex items-center gap-4'>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
    </svg></a>
                        <a href=""><img src={instaLogo} alt="" className='w-8 h-8'/></a>
                        <a href=""><img src={youtubeLogo} alt="" className='w-8 h-8'/></a>
                        <a href=""><img src={whatsappLogo} alt="" className='w-8 h-8'/></a>
                    </div>
                </div>

                <div className='border-2 mx-2 my-4 sm:flex-[1] sm:border-0'>
                    <div className='flex justify-between mx-4 my-6' onClick={() => setisOpen(!isOpen)}>
                        <h3 className='font-semibold'>Quick Links</h3>
                        <p className='cursor-pointer sm:hidden'>{isOpen ? '➖' : '➕'}</p>
                    </div>
                    {isOpen && (
                        <div className='flex flex-col mx-4 gap-2 sm:flex'>
                            <a href="#">Contact Us</a>
                            <a href="#">Shipping policy</a>
                            <a href="#">Return and Refund policy</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">About Us</a>
                            <a href="#">Terms and conditions</a>
                        </div>
                    )}
                </div>
                <hr className='border-t sm:hidden'/>
                <div className="sm:flex-[2]">
                    <img src={image} alt="" />
                </div>
            </div>
            <hr className='border-t  mt-12 border-gray-300'/>
            <div className='my-6 mx-4'>
                <p>© 2025 vangaannachi. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;