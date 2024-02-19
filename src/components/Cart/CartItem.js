import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { CartItemAction } from "../../store/CartItemReducer";

const CartItem = props => {
  const { id, title, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>
          {title}
        </h3>
        <div className={classes.price}>
          ${totalPrice}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(CartItemAction.removeItem(id))}>
            -
          </button>
          <button  onClick={()=>dispatch(CartItemAction.addNewItem({id,title,price}))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
