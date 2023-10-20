export const loginAccount = async (email, password) => {
  console.log(email,password)
  const response = await fetch("http://localhost:8081/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const dataJson = await response.json();
  console.log(dataJson)
  return {
    status: response.status,
    dataJson,
  };
};
