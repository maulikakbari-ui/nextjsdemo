import Slider from "../components/Home/Banner/Slider";
import CategorySlider from "../components/Home/Category/Category";
//import GridBanner from "../components/home/GridBanner/GridBanner";
import HomeService from "../components/home/HomeService/HomeService";
import DealDay from "../components/home/DealDay/DealDay";
import ProductSlider from "../components/Home/Product/Product";
import RecentNews from "../components/Home/RecentNews/RecentNews";

function HomePage() {
  return (
    <>
      <Slider />
      {/* <GridBanner /> */}
      <HomeService />
      <CategorySlider />
      <DealDay />
      <ProductSlider />
      <RecentNews />
    </>
  );
}

export default HomePage;
