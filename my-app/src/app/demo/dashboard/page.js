'use client';

import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <>
      <div>Dashboard</div>
      <button type="button" onClick={() => router.push('/')}>
        Home
      </button>
    </>
  );
};

export default Page;
