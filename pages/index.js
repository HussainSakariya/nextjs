import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hussain Blogs</title>
        <meta name="description" content="Hussain Blogs" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="/log.js" ></script> */}
      </Head>

      {/* <Script src="/log.js" strategy="lazyOnload"></Script> */}
      <nav className={styles.main_menu}>
        <ul>
          <Link href="\"><a><li>Home</li></a></Link>
          <Link href="\blogs"><a><li>Blog</li></a></Link>
          <Link href="\contact"><a><li>Conatct</li></a></Link>
          <Link href="\about"><a><li>About</li></a></Link>
        </ul>
      </nav>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="http://iamhussainsakariya.web.app/" target="_blank">Hussain Coder!</a>
        </h1>

        <p className={styles.description}>
          {/* Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> */}
          Code Mode ON
        </p>

        <div className={styles.grid}>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
