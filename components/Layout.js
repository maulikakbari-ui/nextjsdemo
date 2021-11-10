import Navbar from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";

import { Provider } from "react-redux";
import store from "../redux/store";

export default function Layout({ children }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Provider>
    </>
  );
}
