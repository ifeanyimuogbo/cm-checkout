import { CartSideBar } from "../../components/cartsidebar";
import { MainCart } from "../../components/maincart";
import { MainWrapper, SideWrapper, Wrapper } from "./cart.styles";

export const ShoppingCart = () => {
  return (
    <Wrapper>
      <MainWrapper>
        <MainCart />
      </MainWrapper>
      <SideWrapper>
        <CartSideBar />
      </SideWrapper>
    </Wrapper>
  );
};
