import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div
      className="nav-wrapper"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <h2>My Blog Post</h2>
      <nav className="navbar">
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="#">Blogs</Link>
          </li> */}
          <li>
            <Link to="/create">New Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
