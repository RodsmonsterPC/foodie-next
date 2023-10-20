export const getPost = async () => {
  const response = await fetch("http://localhost:8081/posts/");
  const data = await response.json();
  return data.posts;
};

export const getPostId = async (id) => {
  const response = await fetch(`http://localhost:8081/posts/${id}`);
  const dataProduct = await response.json();
  return {
    status: response.status,
    dataProduct,
  };
};

export const postPost = async (data, token) => {
  const response = await fetch(`http://localhost:8081/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });
  const dataProduct = await response.json();
  return {
    status: response.status,
    dataProduct,
  };
};

export const updatePost = async (id, data, token) => {
  const response = await fetch(`http://localhost:8081/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });
  const dataUpdate = await response.json();
  return {
    status: response.status,
    dataUpdate,
  };
};

export const deletePost = async (id) => {
  const response = await fetch(`http://localhost:8081/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
  });
  const dataDelete = await response.json();
  return {
    status: response.status,
  };
};
