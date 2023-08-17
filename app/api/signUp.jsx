export const createAccount = async (email, password) => {
  const response = await fetch("http://localhost:8081/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};
