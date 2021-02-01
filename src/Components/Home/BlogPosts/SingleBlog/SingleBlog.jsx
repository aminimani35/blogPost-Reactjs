import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./SingleBlog.css";
// import useFetch from "../../useFetch";
import useFetch from "../../UseFetch";
const SingleBlog = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data, isPending } = useFetch(`http://localhost:8000/blog/${id}`);
  const handleDelete = () => {
    fetch("http://localhost:8000/blog/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="single-post-wrapper">
      {isPending && <div> Loading ...</div>}
      {data && (
        <article className="single-post">
          <h3>{data.title}</h3>
          <p>{data.body}</p>
          <small> Written by : {data.author}</small>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default SingleBlog;
