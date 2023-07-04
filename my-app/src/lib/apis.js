const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Opps.!!! Something went wrong');
  }
  return res.json();
};

export default getUsers;
