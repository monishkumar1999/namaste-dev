import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../cards/sliceCart";

const CartDetails = () => {
  const cartDetails = useSelector((store) => store.cart.items);
  console.log(cartDetails);

  const dispatch = useDispatch();
  const handleclearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <div className="text-center ">
        <p>Cart</p>
        <button
          className="bg-orange-400 rounded-lg p-2 shadow-lg m-3 text-zinc-100 font-light"
          onClick={() => {
            handleclearCart();
          }}
        >
          Clear cart{" "}
        </button>
        <div className=" w-6/12 m-auto">
          <ItemList items={cartDetails} />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
