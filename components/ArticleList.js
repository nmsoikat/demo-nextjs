import articleStyle from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem'

function ArticleList({articles}) {
  return (
    <div className={articleStyle.grid}>
    {
      articles.map(item => {
        return <ArticleItem key={item.id} article={item}></ArticleItem>
      })
    }
    </div>
  )
}

export default ArticleList
