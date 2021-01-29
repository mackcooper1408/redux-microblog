import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPost from "./PostList/NewPost";
import PostDetails from "./PostList/PostDetails";
import NotFound from "./NotFound";
import Home from "./Home";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/new">
            <NewPost />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/404">
            <NotFound />
          </Route>
          <Route exact path="/:postId">
            <PostDetails />
          </Route>
          <Route exact path="/posts/:category">
            <CategoryList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
