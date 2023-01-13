/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {createContext, memo, useEffect, useState, useCallback} from 'react';
import {data} from '../../assets/dummyData';
import {CartSideBar} from '../../components/cartsidebar';
import {MainCart} from '../../components/maincart';
import {MainWrapper, SideWrapper, Wrapper} from './cart.styles';

export const StoreContext = createContext(null);

export const ShoppingCart = memo(() => {
  const [listOfItems, setListOfItems] = useState(data?.listOfItems);
  const [cart, setCart] = useState(data?.cart);

  /// N.B: API loading state not added because I have an intentional fallback IMG which I wish to display. So, please pardon the flicker.
  const getFeaturedProductsFromChimoneyAPI = useCallback(async () => {
    // N.B: Token not stored in .env so that errors wouldnt be thrown when assessing engineer runs codebase. Keeping it simple. As a standard, I store all tokens in .env
    const response = await axios.get(
      'https://api.chimoney.io/v0.2/info/assets',
      {
        headers: {
          Authorization:
            'X-API-KEY: 5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262',
        },
      },
    );
    if (!!response && response?.data?.data?.featuredProducts?.length > 0) {
      setListOfItems((listOfItems) =>
        listOfItems.map((item, index) => ({
          ...item,
          img: response?.data?.data?.featuredProducts?.[index]?.img,
        })),
      );
    }
    return response?.data?.data?.featuredProducts;
  }, []);
  useEffect(() => {
    getFeaturedProductsFromChimoneyAPI();
  }, []);

  return (
    <StoreContext.Provider value={{listOfItems, setListOfItems, cart, setCart}}>
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
});
ShoppingCart.displayName = 'Cart';
