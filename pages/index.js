import Slider from "../components/Home/Banner/Slider";
import CategorySlider from "../components/Home/Category/Category";
import GridBanner from "../components/Home/GridBanner/GridBanner";
import HomeService from "../components/Home/HomeService/HomeService";
import DealDay from "../components/Home/DealDay/DealDay";
import ProductSlider from "../components/Home/Product/Product";
import RecentNews from "../components/Home/RecentNews/RecentNews";

function HomePage(props) {
  const { products } = props;
  return (
    <>
      <Slider />
      <ProductSlider products={products} />
      <GridBanner />
      <HomeService />
      <CategorySlider />
      <DealDay />
      <RecentNews />
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log(products, "test");

  // By returning { props: { products } }, the products component
  // will receive `products` as a prop at build time
  return {
    props: {
      products,
    },
  };
}
