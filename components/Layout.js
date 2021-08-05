import layoutStyle from '../styles/Layout.module.css'
import Header from './Header'

import Nav from './Nav'

function Layout({children}) {
  return (
    <>
    <Nav></Nav>
    <div className={layoutStyle.container}>
      <main className={layoutStyle.main}>
        <Header></Header>    
        {children}
      </main>
    </div>
    </>
  )
}

export default Layout
