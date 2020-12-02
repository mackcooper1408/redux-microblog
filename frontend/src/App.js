// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPost from './NewPost';
import Home from './Home';
import Navbar from './Navbar';
import PostDetails from './PostDetails';

const initialPosts = [
  { id: 123, title: "cool stuff", description: "this is cool", body: "WOW WOW WOW, SO COOL!" },
  { id: 1243, title: "cool stuff", description: "this is cool", body: "honestly... not that cool..." }]

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
            <Home initialPosts={initialPosts}/>
          </Route>
          <Route exact path="/:postId">
            <PostDetails posts={initialPosts}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
