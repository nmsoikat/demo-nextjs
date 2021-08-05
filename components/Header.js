import headerStyle from '../styles/Header.module.css'

function Header() {
  return (
    <div>
        <h1 className={headerStyle.title}><span>Tech</span> News</h1>

        <p className={headerStyle.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum, temporibus dolores quam quis, reiciendis labore minima a delectus laudantium nobis. Minus, earum nam ipsam possimus nihil eligendi voluptatum harum?
        </p>
    </div>
  )
}

export default Header
