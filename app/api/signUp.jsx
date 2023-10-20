export const createAccount = async (email, password) => {
  const response = await fetch("http://localhost:8081/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const dataJson = await response.json();
  return {
    status: response.status,
    dataJson,
  };
};

export const getUser = async (id) => {
  const response = await fetch(`http://localhost:8081/users/${id}`);
  const dataJson = await response.json();
  return {
    status: response.status,
    dataJson,
  };
};

export const updateAccount = async (id, data) => {
 
  const response = await fetch(`http://localhost:8081/users/${id}`, {
    method: "PATCH",
    // headers: { "Content-Type": "application/json" },
    body: data
  });
  const newData = await response.json();
  return {
    status: response.status,
    newData,
  };
};
