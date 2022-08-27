function onlyPrice(items) {
  let priceArray = [];
  if (!items) return;
  items.map((item) => priceArray.push(item.item.Price * item.amount));
  return priceArray;
}

export function sum(items) {
  let priceArray = [];
  priceArray = onlyPrice(items);
  let sum = priceArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sum;
}

export function numberOfItemsInCart(cartItems) {
  let numArray = [];
  cartItems.map((item) => numArray.push(item.amount));
  let num = numArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return num;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US');
}
