
import './App.css';
import Navbar from './Navbar/navbar';
import TopSlider from './TopSlider/topSlider';
import OrganicItems from './OrganicCategories/organicCategories';
import ShopByConcern from './ShopByConcern/shopByConcern';
import ProductsSlider from './ProductsSlider/productsSlider';
import BestSelling from './BestSellingSection/bestSelling';
import HairOil from './HairOilSection/hairOil';
import SkinCare from './SkinCare/skinCare';
import HealthAndWealth from './HealthAndWellness/healthAndWeatlth';
import BabyAndMother from './BabyAndMotherCare/babyAndMotherCare';
import PureHoneyProducts from './PureHoney/pureHoneyProducts';
import PicklesAndThoku from './PickelesAndThokku/pickelsAndThokku';
import OilAndNaturalSweetners from './OilAndNaturalSweet/oilAndNaturalSweetners';
import SpicesAndMasalas from './SpicesAndMasalas/spicesAndMasalas';
import SweetsAndSavouries from './SweetsAndSavouries/sweetsAndSavouries';
import DryGoods from './DryGoods/dryGoods';
import CustomerReview from './CustomersReview/customerReview';
import Footer from './Footer/footer';
import BottomNavBar from './mobileBottomNavBar/bottomNavBarMobile';

function App() {
  return (
    <>
      <Navbar />
      <TopSlider />
      <OrganicItems />
      <ShopByConcern/>
      <ProductsSlider/>
      <BestSelling/>
      <HairOil/>
      <SkinCare/>
      <HealthAndWealth/>
      <BabyAndMother/>
      <PureHoneyProducts/>
      <PicklesAndThoku/>
      <OilAndNaturalSweetners/>
      <SpicesAndMasalas/>
      <SweetsAndSavouries/>
      <DryGoods/>
      <CustomerReview/>
      <Footer/>
      <BottomNavBar/>
    </>
  );
}

export default App;
