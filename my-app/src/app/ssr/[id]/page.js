import { getPost } from '@/lib/apis';

async function Page(props) {
  const postData = getPost(props.params.id);

  const post = await postData;

  console.log('post--->', post);

  return (
    <>
      <h1>Post id - {post.id}</h1>
      <h1>Post title - {post.title}</h1>
      <h2>Post title - {post.body}</h2>
    </>
  );
}

export default Page;
