import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>App Root</div>
      <div>/ path</div>
      <Link href="/demo">Demo</Link>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Link href="/ssg">
          <h1>SSG</h1>
        </Link>

        <Link href="/ssr">
          <h1>SSR</h1>
        </Link>

        <h1>ISR</h1>
      </div>
    </main>
  );
}
