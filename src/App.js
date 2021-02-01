import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Home/Create/Create";
import SingleBlog from "./Components/Home/BlogPosts/SingleBlog/SingleBlog";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* new Route for blog adding form */}
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <SingleBlog />
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
