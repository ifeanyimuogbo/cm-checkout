import { Wrapper } from "./maincart.style";
import { Item } from "../item";
import { useContext } from "react";
import { StoreContext } from "../../pages/cart/cart.page";
import { calcTotalCostInCart } from "../../utils/cart-utils";

export const MainCart = () => {
  const { listOfItems, cart } = useContext(StoreContext);
  return (
    <Wrapper>
      <div className="header">
        <h1 className="header__title">Shopping Cart</h1>
        <p className="deselect__prompt">Deselect all items</p>
        <p className="price">Price</p>
      </div>
      <div className="secondary__header">
        <p className="saved__prompt">
          <span>
            Schwinn Discover Hybrid Bicycle, 700C, 28-inch Wheels, Black(S5...
          </span>{" "}
          has been moved to Save for Later
        </p>
      </div>
      {listOfItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      <div className="footer">
        <p>
          Subtotal ({cart?.length} items):{" "}
          <span>{"$" + calcTotalCostInCart(cart)}</span>
        </p>
      </div>
    </Wrapper>
  );
};
MainCart.propTypes = {};
