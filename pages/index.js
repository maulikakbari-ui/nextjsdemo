import Slider from "../components/Home/Banner/Slider";
import CategorySlider from "../components/Home/Category/Category";
import GridBanner from "../components/Home/GridBanner/GridBanner";
import HomeService from "../components/Home/HomeService/HomeService";
import DealDay from "../components/Home/DealDay/DealDay";
import ProductSlider from "../components/Home/Product/Product";
import RecentNews from "../components/Home/RecentNews/RecentNews";

function HomePage() {
  return (
    <>
      <Slider />
      <ProductSlider />
      <GridBanner />
      <HomeService />
      <CategorySlider />
      <DealDay />
      <RecentNews />
    </>
  );
}

export default HomePage;
