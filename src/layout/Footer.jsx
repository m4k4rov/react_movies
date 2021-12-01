import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="container">
          © {new Date().getFullYear()} m4k4rov
          <a className="footer__link" href="!#">Repository</a>
        </div>
      </div>
    </footer>
  )
}

export {Footer};