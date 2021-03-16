import Home from './components/home/Home'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Books from './components/books/Books';
import Table from './components/table/Table';
import Blogs from './components/blogs/Blog';
import Account from './components/account/Account'
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/books">
            <Books />
          </Route>
          <Route  path="/table">
            <Table />
          </Route>
          <Route  path="/blogs">
            <Blogs />
          </Route>
          <Route  path="/account">
            <Account />
          </Route>
          
        </Switch>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
