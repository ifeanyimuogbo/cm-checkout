export const addToLocalStorageCart = (item) => {
  const cart = localStorage?.cart ? JSON.parse(localStorage?.cart) : [];
  const indexOfItemInCart = cart?.findIndex(
    (cartItem) => cartItem?.id === item?.id,
  );
  const newCart =
    indexOfItemInCart === -1
      ? [...cart, item]
      : cart?.map((cartItem) =>
          cartItem?.id === item?.id
            ? {
                ...cartItem,
                quantity: cartItem?.quantity + 1,
              }
            : cartItem,
        );
  localStorage.setItem('cart', JSON.stringify(newCart));
};

export const removeFromLocalStorageCart = (id) => {
  const cart = localStorage?.cart ? JSON.parse(localStorage?.cart) : [];
  const indexOfItemInCart = cart?.findIndex((cartItem) => cartItem?.id === id);

  // Address exceptions where item id doesnt exist -- my fix -- return same array with an error shown in a UI toast (or alert here) to avoid UI breaks
  const newCart =
    indexOfItemInCart !== -1
      ? cart.filter((cartItem) => cartItem?.id !== id)
      : cart;
  if (indexOfItemInCart === -1) {
    alert('This item id does not exist');
  }

  localStorage.setItem('cart', JSON.stringify(newCart));
};

export const incrementItemCountInCartInLocalStorage = (item) => {
  const cart = localStorage?.cart ? JSON.parse(localStorage?.cart) : [];
  const indexOfItemInCart = cart?.findIndex(
    (cartItem) => cartItem?.id === item?.id,
  );
  const newCart =
    indexOfItemInCart === -1
      ? [...cart, item]
      : cart?.map((cartItem) => ({
          ...cartItem,
          quantity: cartItem?.quantity + 1,
        }));
  localStorage.setItem('cart', JSON.stringify(newCart));
  console.log(cart);
};

export const decrementItemCountInCartInLocalStorage = (item) => {
  const cart = localStorage?.cart ? JSON.parse(localStorage?.cart) : [];
  const indexOfItemInCart = cart?.findIndex(
    (cartItem) => cartItem?.id === item?.id,
  );

  // Note I addressed a possible error exception where item doesnt exist in cart by simply returning same cart --- to avoid UI breaks
  const newCart =
    indexOfItemInCart === -1
      ? cart
      : cart?.map((cartItem) =>
          cartItem?.id === item?.id
            ? {
                ...cartItem,
                quantity: cartItem?.quantity - 1,
              }
            : cartItem,
        );
  localStorage.setItem('cart', JSON.stringify(newCart));
};

export const setItemCountInCartInLocalStorage = (item, newCount) => {
  const cart = localStorage?.cart ? JSON.parse(localStorage?.cart) : [];
  const indexOfItemInCart = cart?.findIndex(
    (cartItem) => cartItem?.id === item?.id,
  );
  const newCart =
    indexOfItemInCart === -1
      ? [...cart, item]
      : cart?.map((cartItem) =>
          cartItem?.id === item?.id
            ? {
                ...cartItem,
                quantity: newCount,
              }
            : cartItem,
        );
  localStorage.setItem('cart', JSON.stringify(newCart));
};

export const deleteItemFromStore = (id) => {
  const items = localStorage?.items ? JSON.parse(localStorage?.items) : [];
  const newItems = items.filter((item) => item?.id !== id);
  localStorage?.setItems('items', JSON.stringify(newItems));
};

export const calcTotalCostInCart = (cart) => {
  return cart
    .map((item) => item.cost * item.quantity)
    .reduce((a, b) => a + b, 0);
};
export const isInCart = (id) => {
  const cart = localStorage?.cart ? JSON.parse(localStorage?.cart) : [];
  return cart.findIndex((cartItem) => cartItem.id === id) !== -1;
};

export const quantityOfItemInCart = (id) => {
  const cart = localStorage?.cart ? JSON.parse(localStorage?.cart) : [];
  const indexOfItemInCart = cart?.findIndex((cartItem) => cartItem?.id === id);
  return indexOfItemInCart === -1 ? 0 : cart[indexOfItemInCart].quantity;
};
