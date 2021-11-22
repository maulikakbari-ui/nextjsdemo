import Navbar from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";

import { Provider } from "react-redux";
import store from "../redux/store";
import SearchModel from "./common/SearchModel";

export default function Layout({ children }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <SearchModel />
        <main>{children}</main>
        <Footer />
      </Provider>
    </>
  );
}
