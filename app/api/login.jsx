export const loginAccount = async (email, password) => {
  const response = await fetch("http://localhost:8081/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const dataJson = await response.json();
  return {
    status: response.status,
    dataJson,
  };
};
