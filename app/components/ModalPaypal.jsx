import React from "react";
import Image from "next/image";
import { useUserContext } from "../contexts/userContext";

const ModalPaypal = ({ view, onClose }) => {
  const data = useUserContext();
  console.log("h",view)

  // if (data) {
  //   const { purchase_units, status } = data.paypal;
  //   const { payments, shipping } = purchase_units[0];
  //   const { amount, create_time } = payments.captures[0];
   
  // } else {
  //   return;
  // }
  if(!view) return null
  return (
    <div>
      {status === "COMPLETED" ? (
        <>
          <p>Pago Completado</p>
          <div>
            {" "}
            <Image />
          </div>
          <div>
            <p>Costo Total: ${amount.value}</p>
            <p>fecha de compra: {create_time}</p>
          </div>
        </>
      ) : (
        <>
          <p>Pago no Realizado</p>
          <div>
            <Image />
          </div>
          <div>
            <p>Saldo insuficiente</p>
          </div>
        </>
      )}
    </div>
  );
};
export default ModalPaypal;
