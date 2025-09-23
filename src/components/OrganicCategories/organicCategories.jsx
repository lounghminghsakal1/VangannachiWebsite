import image from '../../assets/organic.jpg';
import hairOilLogo from '../../assets/hair_care_category.jpg';
import babyAndMotherLogo from '../../assets/babyAndMotherLogo.jpg';

const OrganicItems = function () {
    const cardsData = [
        { id:1, name: "Hair Care", src: hairOilLogo},
        { id:2, name: "Skin Care", src: image},
        { id:3, name: "Health & Wellness", src: image},
        { id:4, name: "Baby & Mother Care", src: babyAndMotherLogo},
        { id:5, name: "Household and Eco-Friendly", src: image},
        { id:6, name: "Honey & Honey Based Products", src: image},
        { id:7, name: "Oils and Natural Sweetners", src: image},
        { id:8, name: "Spices & Masalas", src: image},
        { id:9, name: "Pickles & Thokku", src: image},
        { id:10, name: "Sweets & Savouries", src: image},
    ];
    return (
        <div className="mx-2 my-24 ">
            <div>
                <h2 className="text-green-700 text-2xl font-bold text-center mb-4">Our Organic Categories</h2>
                <p className="text-center">Pure by Nature, Perfect for You</p>
            </div>
            <div className='mx-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-10'>
            {cardsData.map((data) => (
                    <div className="border-2 p-4 shadow-lg rounded flex flex-col items-center">
                        <img src={data.src} alt="" className='w-32 h-28 lg:w-40 lg:h-36 '/>
                        <p className='mt-2 text-[16px] font-bold text-center font-semibold text-green-600'>{data.name}</p>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default OrganicItems;