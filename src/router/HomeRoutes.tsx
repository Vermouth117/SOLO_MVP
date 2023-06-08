
import { Dispatch, SetStateAction, createContext, useState } from "react";

import About from "../components/pages/About";
import Cart from "../components/pages/Cart";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import OnlineShop, { FlowerInfo } from "../components/pages/OnlineShop";
import Order from "../components/pages/Order";
import Page404 from "../components/pages/Page404";

type Props = [
  buyCount: number | null,
  setBuyCount: Dispatch<SetStateAction<number | null>>,
  buyFlowerList: FlowerInfo[],
  setBuyFlowerList: Dispatch<SetStateAction<FlowerInfo[]>>
]

export const MyContext = createContext<Props>([null, () => {}, [], () => {}]);

export const CartRoutes = () => {
  const [buyCount, setBuyCount] = useState<number | null>(null);

  const [buyFlowerList, setBuyFlowerList] = useState<FlowerInfo[]>([]);

  return (
    <>
      <MyContext.Provider value={[buyCount, setBuyCount, buyFlowerList, setBuyFlowerList]}>
        <Cart />
      </MyContext.Provider>
    </>
  );
};

export const OnlineShopRoutes = () => {
  const [buyCount, setBuyCount] = useState<number | null>(null);

  const [buyFlowerList, setBuyFlowerList] = useState<FlowerInfo[]>([]);

  return (
    <>
      <MyContext.Provider value={[buyCount, setBuyCount, buyFlowerList, setBuyFlowerList]}>
        <OnlineShop />
      </MyContext.Provider>
    </>
  );
};

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
    path: "/cart",
    children: <CartRoutes />
  },
  {
    path: "/contact",
    children: <Contact />
  },
  {
    path: "/online-shop",
    children: <OnlineShopRoutes />
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
