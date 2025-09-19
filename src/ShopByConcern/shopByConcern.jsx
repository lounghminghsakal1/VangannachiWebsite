import image from '../assets/hairDandruff.jpg';

const ShopByConcern = function () {
    const cardsData = [
        {id:1,title:"BALDNESS",src:image},
        {id:2,title:"DANDRUFF",src:image},
        {id:3,title:"HAIR FALL",src:image},
        {id:4,title:"GREY HAIR",src:image},
        {id:5,title:"HAIR GROWTH",src:image},
    ];

    return(
        <div>
            <h2 className="text-green-700 text-center mb-10 text-3xl font-semibold">Shop By Concern</h2>
            <div className="flex justify-between">
                {cardsData.map((data) => (
                    <div className="flex-col border-4 h-96">
                        <h3 className='text-center text-green-600 font-bold'>{data.title}</h3>
                        <img src={data.src} alt="" className='w-60'/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopByConcern;