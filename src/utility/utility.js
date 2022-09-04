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

export function deliveryCost(items) {
  let subTotal = sum(items);
  if (!items.length) return 0.0;
  if (subTotal >= 50) return 0.0;
  if (subTotal < 50) return 4.99;
}

export function total(items) {
  let total = sum(items) + deliveryCost(items);
  return total;
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
  if (date) return new Date(date).toLocaleDateString('en-US');
  if (!date) return null;
}
