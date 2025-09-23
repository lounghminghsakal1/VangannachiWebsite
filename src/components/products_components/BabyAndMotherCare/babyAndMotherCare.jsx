import hairOilImg from '../../../assets/babyAndMother.jpg'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';



const BabyAndMother = function () {

    const cardsData = [
        {id:1,name:"Kerala Raw Powder",price:"Rs. 1,899.00",src:hairOilImg},
        {id:2,name:"Karisalai Kanmai",price:"Rs. 225.00",src:hairOilImg},
        {id:3,name:"Sprouted Ragi Almond Dates Mix",price:"Rs. 270.00",src:hairOilImg},
        {id:4,name:"Hair Growth Oil - Aloeevera Shampoo Combo 2",price:"Rs. 1,399.00",src:hairOilImg},
    ];

    return(
        <div className="mt-20">
            <h2 className="text-green-600 text-center font-bold text-3xl">Baby & Mother Care</h2> 
            <p className="text-center mt-4">Care You Can Trust, For the Ones You Love Most</p>
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={2}   // number of cards visible at once
                pagination={{clickable:true,el:".cards-pagination"}}
                loop={true}
                className="mt-10"
                breakpoints={{
                    640:{
                        slidesPerView:3,
                        spaceBetween:15,
                    },
                    1024:{
                        slidesPerView:4,
                        spaceBetween:20, 
                    },
                }}
            >
                {cardsData.map((data,index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col mx-2'>
                            <img src={data.src} alt="" className='rounded-2xl'/>
                            <h2 className='text-green-600 h-12 font-semibold text-center'>{data.name}</h2>
                            <p className='mt-2 text-green-600 font-semibold text-center'>{data.price}</p>
                            <button className='mt-2 bg-green-700 rounded-full text-white p-3 w-full'>Select Options</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='cards-pagination mt-8 flex justify-center gap-4'></div>
            <button className='bg-green-700 hover:bg-green-600 text-white p-4 rounded-full font-semibold w-32 block mt-10 mx-auto'>View All</button>
        </div>
    );
}

export default BabyAndMother;