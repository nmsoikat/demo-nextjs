import articleStyle from '../styles/Articles.module.css'

import Link from 'next/link'

function ArticleItem({article}) {
  return (
    <Link href={'/article/[id]'} as={`/article/${article.id}`}>
        <a className={articleStyle.card}>
          <h2>{article.title} &rarr;</h2>
          <p>{article.body}</p>
        </a>
    </Link>
  )
}

export default ArticleItem
