import image from '../assets/fssaiLogo.jpg';
import instaLogo from '../assets/instaLogo.svg';
import youtubeLogo from '../assets/youtubeLogo.png';
import whatsappLogo from '../assets/whatsappLogo.png';

const Footer = function () {    
    return (
        <div>
            <div className="flex mb-10">
                <div className="flex-[1.5] flex flex-col gap-2 mx-10">
                    <h2 className='font-semibold'>Contact us</h2>
                    <p>No 5 Karungadu Road, Pettai, Tirunelveli-627004, Tamil Nadu, India</p>
                    <p>+91 6385815500</p>
                    <p>vangaannachionline@gmail.com</p>
                    <p>Prepaid Orders : +916369599378 (Call/WhatsApp)</p>
                    <p>Courier Tracking/Courier Complaints :+919360757970 (Call/WhatsApp)</p>
                    <p>Bulk Business Enquiries/Direct Contact with Owner : +916385815500 (Call/WhatsApp)</p>
                    <div className='flex items-center gap-2'>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
    </svg></a>
                        <a href=""><img src={instaLogo} alt="" className='w-8 h-8'/></a>
                        <a href=""><img src={youtubeLogo} alt="" className='w-8 h-8'/></a>
                        <a href=""><img src={whatsappLogo} alt="" className='w-8 h-8'/></a>
                    </div>
                </div>
                <div className="flex[1] flex flex-col gap-2 mx-10">
                    <h2 className='font-bold'>Quiick Links</h2>
                    <p><a href="">Contact Us</a></p>
                    <p><a href=""></a>Shipping policy</p>
                    <p><a href=""></a>Return and Refund poicy</p>
                    <p><a href=""></a>Privacy policy</p>
                    <p><a href=""></a>About Us</p>
                    <p><a href=""></a>Terms and conditions</p>
                </div>
                <div className="flex-[2] flex justify-center">
                    <img src={image} alt="" />
                </div>
            </div>
            <hr className='border-t mx-10 mt-12 border-gray-300'/>
            <div className='mt-6 m-10 '>
                <p>© 2025 vangaannachi. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;