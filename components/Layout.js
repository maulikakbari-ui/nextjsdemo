import Navbar from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
