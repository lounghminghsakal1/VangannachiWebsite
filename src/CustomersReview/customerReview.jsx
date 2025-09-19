import image from '../assets/card1Image.jpg';

const CustomerReview = function () {
    return (
        <div>
            <div>
                <h2 className="text-black text-center text-3xl text-semibold">Customer Say!</h2>
                <p className="text-center">Customers love our products and we always strive to please them all.</p>
            </div>
            <div>
                <div>
                    <img src={image} alt="" />
                    <div>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>Rani Kumar - verified buyer</p> 
                    </div>
                    <div>
                        <img src={image} alt="" className='w-32'/>
                        <div>
                            <p>Hair Growth Oil</p>
                            <p>R.s. 1760</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerReview;