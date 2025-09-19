import hairOilImg from '../assets/babyAndMother.jpg'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const BabyAndMother = function () {

    const cardsData = [
        {id:1,name:"Kerala Raw Powder",price:"Rs. 1,899.00",src:hairOilImg},
        {id:2,name:"Karisalai Kanmai",price:"Rs. 225.00",src:hairOilImg},
        {id:3,name:"Sprouted Ragi Almond Dates Mix",price:"Rs. 270.00",src:hairOilImg},
        {id:4,name:"Hair Growth Oil - Aloeevera Shampoo Combo 2",price:"Rs. 1,399.00",src:hairOilImg},
    ];

    return(
        <div className="mt-20">
            <h2 className="text-green-600 text-center text-3xl">Baby & Mother Care</h2> 
            <p className="text-center mt-4">Care You Can Trust, For the Ones You Love Most</p>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}   // number of cards visible at once
                navigation
                loop={true}
                className="mt-10"
            >
            <div className='flex border-4 justify-around mt-10'>
                {cardsData.map((data,index) => (
                    <SwiperSlide key={index}>
                    <div className='flex-col border-2'>
                        <img src={data.src} alt="" className='mx-auto w-64'/>
                        <h3 className='text-green-500 text-center'>{data.name}</h3>
                        <p className='text-green-500 text-center'>{data.price}</p>
                        <button className='bg-green-600 hover:bg-green-700 text-white px-2 py-2 w-full rounded-full font-semibold transistion duration 200 '>Select Options</button>
                    </div>
                    </SwiperSlide>
                ))}
            </div>
            </Swiper>
            <button className='bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full font-semibold transistion duration 200 w-48 block mt-6 mx-auto'>View All</button>
        </div>
    );
}

export default BabyAndMother;