import { getPosts } from '@/lib/apis';
import Link from 'next/link';

const Page = async () => {
  const postsData = getPosts();

  const posts = await postsData;

  const postList = (
    <>
      {posts.map((post) => {
        return (
          <>
            {' '}
            <Link href={`/ssr/${post.id}`}>
              <li>{post.title}</li>
            </Link>
            <br></br>
          </>
        );
      })}
    </>
  );

  return (
    <>
      SSR
      {postList}
    </>
  );
};
export default Page;
