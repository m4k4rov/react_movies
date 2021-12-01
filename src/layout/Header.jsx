import './Header.css';

function Header() {
  return (
    <nav className="navigate">
      <div className="navigate__wrapper">
        <a href="!#" className="navigate__logo">React Movies</a>
        <ul className="navigate__links">
          <li className="navigate__link"><a href="!#">Repository</a></li>        
        </ul>
      </div>
    </nav>
  )
}

export {Header};