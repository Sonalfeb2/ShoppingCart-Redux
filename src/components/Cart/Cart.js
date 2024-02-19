import {  useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  const itemsState = useSelector(state => state.cartItem.items);
  return (
    <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          {itemsState.length === 0 && <h1>No item Found</h1>}
          {itemsState.map(item =>
            <ul>
              <CartItem
               key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price
                }}
              />
            </ul>
          )}
    </Card>
  );
};

export default Cart;
