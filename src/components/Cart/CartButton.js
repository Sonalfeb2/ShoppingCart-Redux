import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { CartSlicesAction } from '../../store/CartReducer';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemState = useSelector((state)=>state.cartItem.items);
  return (
    <button className={classes.button} onClick={()=>dispatch(CartSlicesAction.cartHandler())}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemState&&itemState.length}</span>
    </button>
  );
};

export default CartButton;
