import {memo, useContext} from 'react';
import {ratedItems} from '../../assets/dummyData';
import {StoreContext} from '../../pages/cart/cart.page';
import {calcTotalCostInCart} from '../../utils/cart-utils';
import {RatedItem} from '../rateditem/rateditem.component';
import {Button} from '../shared/button/button';
import {Checkbox} from '../shared/checkbox/checkbox';
import {HorizontalSpacer, VerticalSpacer} from '../shared/spacer';
import {
  HighlyRatedProductsBox,
  SubtotalBox,
  Wrapper,
} from './cartsidebar.style';

export const CartSideBar = memo(() => {
  const {cart} = useContext(StoreContext);
  return (
    <Wrapper>
      <SubtotalBox>
        <p className="summary">
          {' '}
          Subtotal ({cart?.length} items):{' '}
          <span>{'$' + calcTotalCostInCart(cart)}</span>
        </p>
        <VerticalSpacer size="8px" />
        <div className="indicate__gift">
          <Checkbox />
          <HorizontalSpacer size="8px" />
          <p>This order contains a gift</p>
        </div>
        <VerticalSpacer size="15px" />
        <Button>Proceed to Checkout</Button>
        <div className="mobile-div-wrapper">
          <Checkbox />
          <HorizontalSpacer size="8px" />
          <p>Send as a gift. Include custom message.</p>
        </div>
      </SubtotalBox>
      <VerticalSpacer size="20px" />
      <HighlyRatedProductsBox>
        <h4>Highly rated skincare products from brands you might like</h4>

        {ratedItems.map((item) => (
          <RatedItem item={item} key={item.name} />
        ))}
      </HighlyRatedProductsBox>
    </Wrapper>
  );
});

CartSideBar.propTypes = {};
CartSideBar.displayName = 'Cart Sidebar';
