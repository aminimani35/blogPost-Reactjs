import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 , Page Not Found</h2>
      <Link to="/">
        <p>You Can Check back the Home Page</p>
      </Link>
    </div>
  );
};

export default NotFound;
