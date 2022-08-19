import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./pages/Details/details";
import Post from "./pages/Post/post";
import Edit from "./pages/Edit/edit";
import Feed from "./pages/Feed/feed";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/post" component={Post} />
        <Route path="/details/:id" component={Details} />
        <Route path="/edit/:id" component={Edit} />
        <Route exact path="/" component={Feed} />
      </Router>
    </div>
  );
}

export default App;
