import logo from './../assets/logo-01.svg';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Header">
      <div className="header">
        <img src={logo} alt="Bun Bun bake shop logo" width="400" />
        <div className="navbar">
          <nav>
            <ul>
              <li className="current-page">
                <a href="">PRODUCTS</a>
              </li>
              <li>
                <a href="">CART</a>
              </li>
            </ul>
          </nav>
          <hr />
          <h1>Our hand-made cinnamon rolls</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
