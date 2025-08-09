import { Outlet } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
    return(
        <div>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout