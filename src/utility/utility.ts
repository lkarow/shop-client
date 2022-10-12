type CartItem = {
  item: Item;
  amount: number;
  size: string;
};

type Item = {
  _id: string;
  Name: string;
  Brand: string;
  Price: number;
  ImagePath: string;
};

function onlyPrice(items: CartItem[]): number[] {
  let priceArray: number[] = [];
  if (!items) return [];
  items.map((item) => priceArray.push(item.item.Price * item.amount));
  return priceArray;
}

export function sum(items: CartItem[]): number {
  let priceArray: number[] = onlyPrice(items);
  let sum = priceArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sum;
}

export function deliveryCost(items: CartItem[]): number {
  let subTotal = sum(items);
  if (items.length && subTotal < 50) return 4.99;
  return 0;
}

export function total(items: CartItem[]): number {
  let total = sum(items) + deliveryCost(items);
  return total;
}

export function numberOfItemsInCart(cartItems: CartItem[]): number {
  let numArray: number[] = [];
  cartItems.map((item) => numArray.push(item.amount));
  let num = numArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return num;
}

export function formatDate(date: string | undefined) {
  if (date) return new Date(date).toLocaleDateString('en-US');
  if (!date) return null;
}
