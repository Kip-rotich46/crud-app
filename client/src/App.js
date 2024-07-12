import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from './Pages/Home/Home';
import CreatePost from './Pages/CreatePost/CreatePost';

import "./App.css";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Link to='/createPost'>Create Post</Link>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/createPost' element={<CreatePost />}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
