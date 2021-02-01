import BlogPosts from "./BlogPosts/BlogPosts";
import useFetch from "./UseFetch";
const Home = () => {
  const { data, isPending } = useFetch("http://localhost:8000/blog");
  return (
    <>
      <h2>All Blogs</h2>
      {isPending && <div style={{ color: "#fff" }}>loading ...</div>}
      {data && <BlogPosts blogs={data} />}
    </>
  );
};

export default Home;
