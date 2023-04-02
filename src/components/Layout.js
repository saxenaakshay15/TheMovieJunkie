import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = ({ onChangeNav, valueNav }) => {
  const changeHandler = (e) => {
    e.preventDefault();
    onChangeNav(e);
  };
  return (
    <div className="App">
      <header className="Header" >
        <h1>The Movie Junkie</h1>
        <Link to={"/"}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/777/777242.png"
            alt="Grapefruit slice atop a pile of other slices"
          ></img>
        </Link>
      </header>

      <nav className="Nav">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <Link to={"/"} style={{textDecoration:"none"}}>
            <input
              id="search"
              type="text"
              placeholder="Search Movies"
              value={valueNav}
              className="searchHai"
              onChange={changeHandler}
            />
          </Link>
        </form>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="watchlist">Watchlist</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer className="Footer">
        <p>Copyright ©{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
