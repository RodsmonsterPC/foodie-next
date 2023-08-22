export const createAccount = async (email, password) => {
  const response = await fetch("http://localhost:8081/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};

export const updateAccount = async (id, data) => {
  const response = await fetch(`http://localhost:8081/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  const newData = await response.json();
  return newData.posts;
};
