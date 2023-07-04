const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Opps.!!! Something went wrong');
  }
  return res.json();
};

export default getUsers;

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Opps.!!! Something went wrong');
  }
  return res.json();
};

const getPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error('Opps.!!! Something went wrong');
  }
  return res.json();
};

export { getUsers, getPosts, getPost };

//{cache:'force-cache'} --> default SSR

//{cache:'no-store'} -->
