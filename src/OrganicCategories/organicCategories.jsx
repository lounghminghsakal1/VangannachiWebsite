import image from '../assets/organic.jpg';

const OrganicItems = function () {
    const cardsData = [
        { id:1, name: "Hair Care", src: image},
        { id:2, name: "Skin Care", src: image},
        { id:3, name: "Health & Wellness", src: image},
        { id:4, name: "Baby & Mother Care", src: image},
        { id:5, name: "Household and Eco-Friendly", src: image},
        { id:6, name: "Honey & Honey Based Products", src: image},
        { id:7, name: "Oils and Natural Sweetners", src: image},
        { id:8, name: "Spices & Masalas", src: image},
        { id:9, name: "Pickles & Thokku", src: image},
        { id:10, name: "Sweets & Savouries", src: image},
    ];
    return (
        <div className="m-20">
            <div>
                <h2 className="text-green-500 text-3xl font-black text-center">Our Organic Categories</h2>
                <p className="text-center">Pure by Nature, Perfect for You</p>
            </div>
            <div className='flex gap-20 flex-wrap mt-10 justify-center'>
            {cardsData.map((data) => (
                    <div className="w-60 border-4">
                        <img src={data.src} alt="" className='w-80 h-80 p-4'/>
                        <p className='text-center'>{data.name}</p>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default OrganicItems;