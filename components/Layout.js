import Navbar from "../components/home/Header/Header";
import Footer from "../components/home/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
