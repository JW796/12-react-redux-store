import { useSelector } from "react-redux";
import Product from "./Product";

const CartProducts = () => {
  const { products, total, amount } = useSelector((store) => store.basket);
  return (
    <div>
      {products.map((item, i) => (
        <Product
          key={new Date().getTime + Math.random()}
          name={item.name}
          price={item.price}
          image={item.image}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default CartProducts;
