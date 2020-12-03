// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPost from './NewPost';
import Home from './Home';
import Navbar from './Navbar';
import PostDetails from './PostDetails';

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
          <Route exact path="/:postId">
            <PostDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
