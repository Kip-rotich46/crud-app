import { BrowserRouter as Routes, Route, Router, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './Pages/Home/Home';
import CreatePost from './Pages/CreatePost/CreatePost';

import "./App.css";
import SinglePost from './Pages/SinglePost/SinglePost';

function App() {


  return (
    <div className="App">
      <Routes>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to='/' className="navbar-brand">Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link to='/createPost' className="navbar-brand">Create Post</Link>

                </li>               
                
              </ul>
            </div>
          </div>
        </nav>
        <Router>
          <Route path='/' element={<Home />} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path='/singlePost/:id' element={<SinglePost />} />

        </Router>
      </Routes>

    </div>
  );
}

export default App;
