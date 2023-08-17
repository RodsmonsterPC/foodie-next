export const getPost = async () => {
  const response = await fetch("http://localhost:8081/post/");
  const data = await response.json();
  return data.posts;
};

export const getPostId = async (id) => {
  const response = await fetch(`http://localhost:8081/post/${id}`);
  const data = await response.json();
  return data.posts;
};

export const postPost = async (data, token) => {
  const response = await fetch(`http://localhost:8081/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });
  const data = await response.json();
  return data.posts;
};

export const updatePost = async (id, data, token) => {
  const response = await fetch(`http://localhost:8081/post/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });
  const data = await response.json();
  return data.posts;
};

export const deletePost = async (id, data) => {
  const response = await fetch(`http://localhost:8081/post/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
  });
  const data = await response.json();
  return data.posts;
};
