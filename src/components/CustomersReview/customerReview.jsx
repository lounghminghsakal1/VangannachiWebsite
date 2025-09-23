import image from '../../assets/customerReview.jpg';
 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


const CustomerReview = function () {
    const cardsData = [
        {id:1,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:3,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:4,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:5,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:2,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:6,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:7,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:8,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:9,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit esse doloremque fugiat imped",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
    ];

    const extraSerives = [
        {id:1,img:image,serviceName:"Faster Delivery", oneLiner:"Your Order Delivered in Just 6-7 Days!"},
        {id:1,img:image,serviceName:"Faster Delivery", oneLiner:"Your Order Delivered in Just 6-7 Days!"},
        {id:1,img:image,serviceName:"Faster Delivery", oneLiner:"Your Order Delivered in Just 6-7 Days!"},
    ];

    return (
        <div className='mb-20 mt-20'>
            <h2 className='text-3xl text-center font-semibold'>Customer Say</h2>
            <p className='text-center mt-4 pl-3'>Customers love our products and we always strive to please them all.</p>
            <div className='mx-4'>
                <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}   // number of cards visible at once
                // navigation
                loop={true}
                className="mt-6 w-full"
                breakpoints={{
                    640:{
                        slidesPerView:2,
                        spaceBetween:15
                    },
                    1024:{
                        slidesPerView:2,
                        spaceBetween:20
                    }
                }}
                >
                    {cardsData.map((data,index) => (
                        <SwiperSlide key={index}>
                            <div className='flex border-2 rounded-xl p-4'>
                                <div className='hidden sm:block sm:w-40'>
                                    <img src={data.image} alt="" className=''/>
                                </div>
                                <div className='flex-[1.5]'>
                                    <div className=''>
                                        <p className='mt-4 mx-4'>⭐⭐⭐⭐⭐</p>
                                        <p className='my-2 mx-4 '><strong className='font-semibold'>{data.name}</strong> ✔️ Verified Buyer</p>
                                    </div>
                                    <div>
                                        <p className='mb-4 mx-4'>{data.review}</p>
                                    </div>
                                    <div className='flex border-t-2'>
                                        <img src={data.image} alt="" className='w-32 h-32 rounded-full object-cover mr-4'/>
                                        <div className='flex flex-col justify-center items-center'>
                                            <h4 className='font-semibold'>{data.productTitle}</h4>
                                            <p className='text-green-700 font-semibold'>{data.amount} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{ clickable:true,el:".custom-pagination" }} //dots
                className='mt-16'
                breakpoints={{
                    640:{
                        slidesPerView:3,
                        spaceBetween:10
                    }
                }}
            >
                {extraSerives.map((data,index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col justify-center items-center mt-10'>
                            <img src={data.img} alt="" className='w-16 mb-4'/>
                            <p className='mb-2'>{data.serviceName}</p>
                            <p>{data.oneLiner}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='custom-pagination mt-6 flex justify-center gap-4 '></div>
            <hr className='border-t my-16 border-gray-300 '/>
        </div>
    );

}

export default CustomerReview;