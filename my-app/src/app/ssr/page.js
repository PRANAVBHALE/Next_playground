import getUsers from '@/lib/apis';

// export const getUsers = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   console.log(res);

//   if (!res.ok) {
//     throw new Error('Opps.!!! Something went wrong');
//   }
//   return res.json();
// };

const Page = async () => {
  const usersData = getUsers();

  const users = await usersData;

  const userList = (
    <>
      {users.map((user) => {
        return <li>{user.name}</li>;
      })}
    </>
  );

  return (
    <>
      SSR
      {userList}
    </>
  );
};

export default Page;
