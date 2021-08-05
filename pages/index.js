import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="keyword" content="home, next, react" />
        <meta name="description" content="home page. first next js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to next js</h1>

      <ArticleList articles={articles}></ArticleList>

    </div>
  )
}


export const getStaticProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();

  return {
    props:{
      articles
    }
  }
}
