
import Head from 'next/head'
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      <div className={styles.main}>首页</div>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {

    }
  }
}
