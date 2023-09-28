import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = ({product}) => {

  const URL = "http://localhost:8081";
  const createOrder = () => {
    // Order is created on the server and the order id is returned
    return fetch(`${URL}/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: {
          description: product.name,
          cost: product.price,
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
        console.log("payment successful");
        return response.json();
      })
      .then((data) => console.log(data));
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPalPayment;
