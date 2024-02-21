import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchData, sendData } from "./store/CartAction";
let isIntital = true;
function App() {

  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.cart.showCart);
  const cart = useSelector(state => state.cartItem);
  const notification = useSelector(state => state.cart.notification);

  useEffect(
    () => {
      if(isIntital){
        isIntital = false;
        dispatch(fetchData())
        return;
      }
      if(cart.isChanged){
       dispatch(sendData(cart))}

      // const sendCartData = async () => {
      //   dispatch(
      //     CartSlicesAction.showNotification({
      //       status: "sending...",
      //       title: "pending",
      //       message: "sending cart Data"
      //     })
      //   );
      //   const res = await fetch(
      //     "https://shoppingpage-redux-default-rtdb.firebaseio.com/cart.json",
      //     {
      //       method: "PUT",
      //       body: JSON.stringify(cart)
      //     }
      //   );
      //   if (!res.ok) {
      //     throw new Error("Send Cart Data Faild");
      //   }
        
      //   dispatch(
      //     CartSlicesAction.showNotification({
      //       status: "Success...",
      //       title: "SuccessFully Sent",
      //       message: "Cart Data Sent"
      //     })
      //   );
      // };
      // sendCartData().catch(error => {
      //   dispatch(
      //     CartSlicesAction.showNotification({
      //       status: "Error...",
      //       title: "Error",
      //       message: error
      //     })
      //   );
      // });
    },
    [cart, dispatch]
  );
  return (
    <Fragment>
      {notification&&<Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
