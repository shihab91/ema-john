import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // get products
  const products = await (await fetch("products.json")).json();

  //   get cart
  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      initialCart.push(addedProduct);
    }
  }
  return { products, initialCart };
};
