import { createContext, useState } from "react";
import { CartSideBar } from "../../components/cartsidebar";
import { MainCart } from "../../components/maincart";
import { MainWrapper, SideWrapper, Wrapper } from "./cart.styles";

export const StoreContext = createContext(null);
const data = {
  listOfItems: [
    {
      name: "Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario Armani Men's Mario",
      id: 1,
      img: "https://baajoo.com/wp-content/uploads/2021/12/mts-100d-1avdf-600x600.jpg",
      in_stock: 3,
      sold_by: "REMO TECH US",
      fulfilled_by: "Amazon.ca",
      ships_from: "Amazon.ca",
      style: "English - Macbook only",
      size: "16', 10 core, 16gb, 512 gb",
      color: "Space Grey",
      cost: 300,
    },
    {
      name: "Apple laptop Armani Men's Mario Armani Men's Mario Armani Men's Mario",
      id: 2,
      img: "https://baajoo.com/wp-content/uploads/2021/12/mts-100d-1avdf-600x600.jpg",
      in_stock: 3,
      sold_by: "REMO TECH US",
      fulfilled_by: "Amazon.ca",
      ships_from: "Amazon.ca",
      style: "English - Macbook only",
      size: "16', 10 core, 16gb, 512 gb",
      color: "Space Grey",
      cost: 2000,
      condition: "used, very good",
    },
  ],
  cart: !!localStorage?.cart ? JSON.parse(localStorage?.cart) : [],
};

export const ShoppingCart = () => {
  const [listOfItems, setListOfItems] = useState(data?.listOfItems);
  const [cart, setCart] = useState(data?.cart);

  return (
    <StoreContext.Provider
      value={{ listOfItems, setListOfItems, cart, setCart }}
    >
      <Wrapper>
        <MainWrapper>
          <MainCart />
        </MainWrapper>
        <SideWrapper>
          <CartSideBar />
        </SideWrapper>
      </Wrapper>
    </StoreContext.Provider>
  );
};
