
import './App.css';
import Navbar from './components/Navbar/navbar';
import TopSlider from './components/TopSlider/topSlider';
import OrganicItems from './components/OrganicCategories/organicCategories';
import ShopByConcern from './components/ShopByConcern/shopByConcern';
import ProductsSlider from './components/ProductsSlider/productsSlider';
import BestSelling from './components/BestSellingSection/bestSelling';
import HairOil from './components/products_components/HairOilSection/hairOil';
import SkinCare from './components/products_components/SkinCare/skinCare';
import HealthAndWealth from './components/products_components/HealthAndWellness/healthAndWeatlth';
import BabyAndMother from './components/products_components/BabyAndMotherCare/babyAndMotherCare';
import PureHoneyProducts from './components/products_components/PureHoney/pureHoneyProducts';
import PicklesAndThoku from './components/products_components/PickelesAndThokku/pickelsAndThokku';
import OilAndNaturalSweetners from './components/products_components/OilAndNaturalSweet/oilAndNaturalSweetners';
import SpicesAndMasalas from './components/products_components/SpicesAndMasalas/spicesAndMasalas';
import SweetsAndSavouries from './components/products_components/SweetsAndSavouries/sweetsAndSavouries';
import DryGoods from './components/products_components/DryGoods/dryGoods';
import CustomerReview from './components/CustomersReview/customerReview';
import Footer from './components/Footer/footer';
import BottomNavBar from './components/mobileBottomNavBar/bottomNavBarMobile';

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
