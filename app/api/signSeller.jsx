export const createSeller = async (
  name,
  phoneNumber,
  email,
  description,
  rfc,
  address
) => {
  const response = await fetch("http://localhost:8081/sellers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      phoneNumber,
      email,
      description,
      rfc,
      address,
    }),
  });
  const dataJson = await response.json();
  return {
    status: response.status,
    dataJson,
  };
};
