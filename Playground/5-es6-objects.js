// Object property shorthand

const name = "Pulkit";
const userAge = 23;

const user = {
  name,
  age: userAge,
  location: "rewari",
};

console.log(user);

// object destructing

const product = {
  label: "red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const { label, price, stock, salePrice } = product;
// console.log(label);
// console.log(stock);
// console.log(price);

const transaction = (type, { label, price }) => {
  console.log(type, label, price);
};

transaction("order", product);
