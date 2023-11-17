import { PayPalButtons } from "@paypal/react-paypal-js";
import { useUserContext } from "../contexts/userContext";


const PayPalPayment = ({ product,id,click}) => {
  
  const value = useUserContext();
  const URL = "http://localhost:8081";
  const createOrder = () => {
    return fetch(`${URL}/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: {
          cost: product ,
          idProduct:id,
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = (data) => {
    return fetch(`${URL}/my-server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => value.setPaypal(data));
  };

  return (
   
      <PayPalButtons
   
        style={{
          layout: "horizontal",
          color: "blue",
          label: "paypal",
          shape:"pill",
          tagline: false,
        }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
   
  );
};

export default PayPalPayment;
