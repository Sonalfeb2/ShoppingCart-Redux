import { CartItemAction } from "./CartItemReducer";
import { CartSlicesAction } from "./CartReducer";
export const fetchData = () => {
  return async dispatch => {
    try {
      const res = await fetch(
        "https://shoppingpage-redux-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) {
        throw new Error("Failed Fetching Data");
      }
      const getData = await res.json();
      if (getData.items !== undefined) {
        dispatch(CartItemAction.replaceCartData(getData));
      }
    } catch (error) {
      dispatch(
        CartSlicesAction.showNotification({
          status: "Error...",
          title: "Error",
          message: error
        })
      );
    }
  };
};
export const sendData = cart => {
  return async dispatch => {
    dispatch(
      CartSlicesAction.showNotification({
        status: "sending...",
        title: "pending",
        message: "sending cart Data"
      })
    );
    try {
      const res = await fetch(
        "https://shoppingpage-redux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
          })
        }
      );
      if (!res.ok) {
        throw new Error("Send Cart Data Faild");
      }

      dispatch(
        CartSlicesAction.showNotification({
          status: "Success...",
          title: "SuccessFully Sent",
          message: "Cart Data Sent"
        })
      );
      setTimeout(()=>{
        dispatch(CartSlicesAction.showNotification(null))
      },3000)
    } catch (error) {
      dispatch(
        CartSlicesAction.showNotification({
          status: "Error...",
          title: "Error",
          message: error
        })
      );
    }
  };
};
