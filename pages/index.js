import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andri Muji Hartono</title>
        <meta name="description" content="Andri Muji Hartono" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi I'am <a href="https://nextjs.org">Andri!</a>
        </h1>

        <p className={styles.description}>
        I'm a .Net Developer based in Jakarta, Indonesia. Currently, I'm working for one of Bank in Indonesia. I have passionate and get most enjoyment as a .Net Developer when writing code readable,
        clean code and give problem solving to my client or users. {' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/andrimujihartono/EventDateHoliday" className={styles.card}>
            <h2>Event Date Holiday &rarr;</h2>
            <p>Repository to check to check public holidays.</p>
          </a>

          <a href="https://github.com/andrimujihartono/webscrapper" className={styles.card}>
            <h2>webscrapper &rarr;</h2>
            <p>Repository to a process of retrieving data from a website using python</p>
          </a>

          <a
            href="https://github.com/andrimujihartono/netcore-restapi-tdd"
            className={styles.card}
          >
            <h2>TDD with netcore &rarr;</h2>
            <p>Mini project to learn about how to create API with identity and run unit testing API.</p>
          </a>

          
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
