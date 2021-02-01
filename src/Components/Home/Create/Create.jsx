import { useState } from "react";
import {useHistory} from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [title, setTilte] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Amin");
  const history = useHistory();
  // post Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    // console.log(blog);
    // post request
    fetch("http://localhost:8000/blog/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Data Sent");
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h1 style={{ color: "#fff" }}>Create a new Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>‌Blog Title</label>
        <input
          onChange={(e) => setTilte(e.target.value)}
          value={title}
          type="text"
          required
        />
        <label> Blog Content : </label>
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
          required
        ></textarea>

        <label>Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Amin">Amin</option>
          <option value="Zeynab">Zeynab</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
