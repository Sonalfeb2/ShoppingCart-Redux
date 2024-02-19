import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { CartSlicesAction } from "../../store/CartReducer";

const Cart = props => {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.showCart);
  return (
    <Card className={classes.cart}>
      <button onClick={() => dispatch(CartSlicesAction.cartHandler())}>
        My Cart
      </button>
      {showCart &&
        <div>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
            />
          </ul>
        </div>}
    </Card>
  );
};

export default Cart;
