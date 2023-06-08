
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import OnlineShop from "../components/pages/OnlineShop";
import Order from "../components/pages/Order";
import Page404 from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/about",
    children: <About />
  },
  {
    path: "/contact",
    children: <Contact />
  },
  {
    path: "/online-shop",
    children: <OnlineShop />
  },
  {
    path: "/order",
    children: <Order />
  },
  {
    path: "*",
    children: <Page404 />
  },
];
