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
        <Link href="/ssr">
          <h1>SSR</h1>
        </Link>
        <h1>SGR</h1>
        <h1>ISR</h1>
      </div>
    </main>
  );
}
