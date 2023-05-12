import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menuContainer">
      <div className="logo">
        <img className="logo1" src="./src/img/wiki.png" />
      </div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/search">
          <button>Click to Search</button>
        </Link>
      </nav>
    </div>
  );
}
export default Menu;
