"use client";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
export const userContext = createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function UserProvider(props) {
  const [token, setToken] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [loged, setLoged] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("token");

    setToken(token);
  }, []);

  return (
    <userContext.Provider
      value={{
        token,
        setToken,
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts,
        loged,
        setLoged,
        user,
        setUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
