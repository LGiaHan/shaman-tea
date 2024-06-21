import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Franchise from "../pages/Franchise/Franchise";
import Recruitment from "../pages/Recruitment/Recruitment";
import OrderProduct from "../pages/OrderProduct/OrderProduct";

const Router = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/franchise", component: Franchise },
    { path: "/recruitment", component: Recruitment },
    { path: "/orderproduct/:drinkId", component: OrderProduct },
];
export default Router;
