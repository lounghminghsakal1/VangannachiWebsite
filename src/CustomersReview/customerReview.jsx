import image from '../assets/customerReview.jpg';
 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const CustomerReview = function () {
    const cardsData = [
        {id:1,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:2,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:3,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:4,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:5,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:6,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:7,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:8,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
        {id:9,stars:"⭐⭐⭐⭐⭐",name:"suguna senthilvelan", review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium repellat esse doloremque fugiat impedit voluptates tenetur quasi. Dolo voluptate debitis unde nisi est obcaecati laboriosam omnis totam autem distinctio",image:image, productTitle:"Hair Oil",amount:"Rs.1499"},
    ];

    return (
        <div className='mb-20 mt-20'>
            <h2 className='text-3xl text-center'>Customer Say</h2>
            <p className='text-center mt-4'>Customers love our products and we always strive to please them all.</p>
            <div>
                <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}   // number of cards visible at once
                navigation
                loop={true}
                className="mt-10"
                >
                    {cardsData.map((data,index) => (
                        <SwiperSlide key={index}>
                            <div className='flex border-2 rounded-2xl m-6 shadow'>
                                <div className='flex-[1]'>
                                    <img src={data.image} alt="" />
                                </div>
                                <div className='flex-[1.5]'>
                                    <div className=''>
                                        <p className='mt-4'>⭐⭐⭐⭐⭐⭐</p>
                                        <p className='my-2'>{data.name} Verified Buyer</p>
                                    </div>
                                    <div>
                                        <p className='mb-4'>{data.review}</p>
                                    </div>
                                    <div className='flex border-2'>
                                        <img src={data.image} alt="" className='w-32 h-32 rounded-full object-cover'/>
                                        <div className='flex flex-col justify-center items-center'>
                                            <h4>{data.productTitle}</h4>
                                            <p>{data.amount}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className='flex mt-10 justify-around mx-10 gap-10'>
                <div>
                    <div className='flex justify-center'>
                        <img src={image} alt="" className='w-20 h-20 rounded-full' />
                    </div>
                    <h2 className='text-center'>Free Shipping</h2>
                    <p className='text-center'>Enjoy free worldwide shipping and returns, with customs
    and duties taxes included.</p>
                </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src={image} alt="" className='w-20 h-20 rounded-full' />
                        </div>
                        <h2 className='text-center'>Free Shipping</h2>
                        <p className='text-center'>Enjoy free worldwide shipping and returns, with customs
        and duties taxes included.</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src={image} alt="" className='w-20 h-20 rounded-full'/>
                        </div>
                        <h2 className='text-center'>Free Shipping</h2>
                        <p className='text-center'>Enjoy free worldwide shipping and returns, with customs
        and duties taxes included.</p>
                    </div>
            </div>
            <hr className='border-t my-8 border-gray-300'/>
        </div>
    );

}

export default CustomerReview;