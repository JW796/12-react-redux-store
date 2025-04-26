import { useSelector } from "react-redux";
import Product from "./Product";

const CartProducts = () => {
  const { products, total, amount } = useSelector((store) => store.cart);
  return (
    <div className="py-4">
      {amount > 1 ? (
        <>
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
          <div className="flex flex-row items-center justify-evenly py-8">
            <p className="text-2xl font-medium">Total</p>
            <p className="text-2x font-medium">${total.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl text-gray-700 font-medium text-center">
            There are no Items in your cart!🥲
          </p>
        </>
      )}
    </div>
  );
};

export default CartProducts;
