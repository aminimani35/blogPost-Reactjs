import { Link } from "react-router-dom";
import "./BlogPosts.css";
const BlogPosts = ({ blogs, handleDelete }) => {
  //   const blogs = props.blogs;
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </Link>
          <small>
            Published by :
            <span
              style={{
                color: "#d90429",
              }}
            >
              {blog.author}
            </span>
          </small>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
