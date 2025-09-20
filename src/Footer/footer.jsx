import image from '../assets/fssaiLogo.jpg';


const Footer = function () {    
    return (
        <div className="flex mb-10">
            <div className="flex-[1.5] flex flex-col gap-2 mx-10">
                <h2>Contact us</h2>
                <p>No 5 Karungadu Road, Pettai, Tirunelveli-627004, Tamil Nadu, India</p>
                <p>+91 6385815500</p>
                <p>vangaannachionline@gmail.com</p>
                <p>Prepaid Orders : +916369599378 (Call/WhatsApp)</p>
                <p>Courier Tracking/Courier Complaints :+919360757970 (Call/WhatsApp)</p>
                <p>Bulk Business Enquiries/Direct Contact with Owner : +916385815500 (Call/WhatsApp)</p>
            </div>
            <div className="flex[1] flex flex-col gap-2 mx-10">
                <h2>Quiick Links</h2>
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
    );
}

export default Footer;