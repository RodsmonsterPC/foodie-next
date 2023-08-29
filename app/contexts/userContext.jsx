"use client";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
export const userContext = createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function UserProvider(props) {
  const [token, setToken] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("token");

    setToken(token);
  }, []);

  return (
    <userContext.Provider value={{ token, setToken }}>
      {props.children}
    </userContext.Provider>
  );
}
