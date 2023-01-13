import {Wrapper} from './maincart.style';
import {Item} from '../item';
import {memo, useCallback, useContext} from 'react';
import {StoreContext} from '../../pages/cart/cart.page';
import {calcTotalCostInCart} from '../../utils/cart-utils';

export const MainCart = memo(() => {
  const {listOfItems, cart, setCart} = useContext(StoreContext);
  const deselectItems = useCallback(() => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <div className="header">
        <h1 className="header__title">Shopping Cart</h1>
        <p className="deselect__prompt" onClick={deselectItems}>
          Deselect all items
        </p>
        <p className="price">Price</p>
      </div>
      <div className="secondary__header">
        <p className="saved__prompt">
          <span>
            Schwinn Discover Hybrid Bicycle, 700C, 28-inch Wheels, Black(S5...
          </span>{' '}
          has been moved to Save for Later
        </p>
      </div>
      {listOfItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      <div className="footer">
        <p>
          Subtotal ({cart?.length} items):{' '}
          <span>{'$' + calcTotalCostInCart(cart)}</span>
        </p>
      </div>
    </Wrapper>
  );
});
MainCart.propTypes = {};
MainCart.displayName = 'MainCart';
