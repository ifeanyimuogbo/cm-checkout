import {Checkbox} from '../shared/checkbox/checkbox';
import {HorizontalSpacer, VerticalSpacer} from '../shared/spacer';
import primeIcon from '../../assets/icons/amazon_prime.png';
import PropTypes from 'prop-types';
import {Wrapper} from './item.style';
import {Button} from '../shared/button/button';
import {CgTrashEmpty} from 'react-icons/cg';
import {BsPlusLg} from 'react-icons/bs';
import {memo, useContext} from 'react';
import {StoreContext} from '../../pages/cart/cart.page';
import {
  addToLocalStorageCart,
  decrementItemCountInCartInLocalStorage,
  incrementItemCountInCartInLocalStorage,
  isInCart,
  quantityOfItemInCart,
  removeFromLocalStorageCart,
  setItemCountInCartInLocalStorage,
} from '../../utils/cart-utils';

export const Item = memo(({item}) => {
  // N.B: Deletion of list of store items intentionally made temporary (not persisted)
  const {setCart, setListOfItems} = useContext(StoreContext);
  const addOrRemoveFromCart = (event) => {
    if (event.target.checked) {
      setCart((cart) => [...cart, {id: item.id, quantity: 1, cost: item.cost}]);
      addToLocalStorageCart({id: item.id, quantity: 1, cost: item.cost});
    } else {
      setCart((cart) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        return newCart;
      });
      removeFromLocalStorageCart(item.id);
    }
  };
  const setQuantityInCart = (event) => {
    setCart((cart) => {
      if (cart.findIndex((cartItem) => cartItem.id === item.id) !== -1) {
        return cart?.map((cartItem) =>
          cartItem?.id === item?.id
            ? {
                ...cartItem,
                quantity: event.target.value,
              }
            : cartItem,
        );
      } else
        return [
          ...cart,
          {
            id: item.id,
            cost: item.cost,
            quantity: event.target.value,
          },
        ];
    });
    setItemCountInCartInLocalStorage(
      {
        id: item.id,
        cost: item.cost,
        quantity: event.target.value,
      },
      event.target.value,
    );
  };
  const incrementQuantityInCart = () => {
    setCart((cart) => {
      if (cart.findIndex((cartItem) => cartItem.id === item.id) !== -1) {
        return cart.map((sel) =>
          sel.id === item.id
            ? {
                ...sel,
                quantity: sel.quantity + 1,
              }
            : sel,
        );
      } else
        return [
          ...cart,
          {
            id: item.id,
            cost: item.cost,
            quantity: 1,
          },
        ];
    });

    incrementItemCountInCartInLocalStorage({
      id: item.id,
      cost: item.cost,
      quantity: 1,
    });
  };
  const decrementQuantityInCart = () => {
    setCart((cart) => {
      if (cart.findIndex((cartItem) => cartItem.id === item.id) !== -1) {
        return cart?.map((cartItem) =>
          cartItem?.id === item?.id
            ? {
                id: cartItem.id,
                cost: cartItem.cost,
                quantity: cartItem?.quantity - 1,
              }
            : cartItem,
        );
      } else return cart;
    });
    decrementItemCountInCartInLocalStorage(item);
  };
  const deleteItemFromStore = () => {
    setListOfItems((list) =>
      list.filter((itemInStore) => itemInStore.id !== item.id),
    );
    setCart((cart) => {
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      return newCart;
    });
  };

  return (
    <Wrapper>
      <span className="product__check">
        <Checkbox onChange={addOrRemoveFromCart} checked={isInCart(item.id)} />
      </span>
      <div className="product__img">
        <img src={item?.img} alt={item?.name} />
        <div className="float_buttons">
          <VerticalSpacer size="10px" />
          <div className="btn__group">
            <div className="left" onClick={decrementQuantityInCart}>
              <CgTrashEmpty onClick={deleteItemFromStore} />
            </div>
            <div className="count">{quantityOfItemInCart(item.id)}</div>
            <div className="right" onClick={incrementQuantityInCart}>
              <BsPlusLg />
            </div>
          </div>
          {/* <VerticalSpacer size="10px" />
          <Button kind="secondary">See more like this</Button> */}
        </div>
      </div>
      <div className="product__info">
        <h4>{item?.name}</h4>
        <div className="mobile-price-div">
          <p>{item?.cost}</p>
          <HorizontalSpacer size="20px" />
          <img src={primeIcon} alt="Amazon prime icon" />
        </div>

        {item?.condition ? (
          <>
            <p className="item__condition">{item?.condition}</p>
            <VerticalSpacer size="8px" />
          </>
        ) : (
          <VerticalSpacer size="10px" />
        )}
        {item?.in_stock === 0 ? (
          <>
            <p className="item__instock red">Out of stock</p>
            <VerticalSpacer size="8px" />
          </>
        ) : item?.in_stock === 1 ? (
          <>
            <p className="item__instock red">Only 1 left in stock</p>
            <VerticalSpacer size="8px" />
          </>
        ) : (
          <>
            <p className="item__instock">In stock</p>
            <VerticalSpacer size="8px" />
          </>
        )}
        <p className="shipment__info">
          Ships from <span>{item?.ships_from}</span> and sold by {item?.sold_by}
        </p>
        <VerticalSpacer size="8px" />
        <img src={primeIcon} alt="Amazon prime icon" />
        <VerticalSpacer size="8px" />
        <div className="indicate__gift">
          <Checkbox />
          <HorizontalSpacer size="8px" />
          <p>This will be a gift </p>
          <HorizontalSpacer size="8px" />
          <a href="/">Learn more</a>
        </div>
        <VerticalSpacer size="8px" />
        <div className="info__footer">
          <select
            value={quantityOfItemInCart(item.id)}
            onChange={setQuantityInCart}
          >
            <option value={1}>Qty: 1</option>
            <option value={2}>Qty: 2</option>
            <option value={3}>Qty: 3</option>
            <option value={4}>Qty: 4</option>
            <option value={5}>Qty: 5</option>
          </select>
          <HorizontalSpacer size="10px" />
          <div className="footer__option" onClick={deleteItemFromStore}>
            <p>Delete</p>
          </div>
          <div className="footer__option">
            <p>Save for later</p>
          </div>
          <div className="footer__option">
            <p>See more like this</p>
          </div>
          <div className="footer__options__mobile">
            <Button kind="secondary" onClick={deleteItemFromStore}>
              Delete
            </Button>
            <HorizontalSpacer size="10px" />
            <Button kind="secondary">Save for later</Button>
          </div>
        </div>
      </div>
      <div className="product__cost">
        <p>{'$' + item?.cost}</p>
      </div>
    </Wrapper>
  );
});

Item.propTypes = {
  item: PropTypes.any,
};
Item.displayName = 'Item';
