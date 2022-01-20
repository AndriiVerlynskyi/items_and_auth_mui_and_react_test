import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Auth from './pages/Auth'
import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login"/>}/>
        <Route exact path='/login' element={<Auth/>}/>
        <Route exact path='/posts' element={<Posts/>}/>
        <Route exact path='/addPost' element={<AddPost/>}/>
        <Route exact path='/editPost/:id' element={<EditPost/>}/>
        <Route exact path='/deletePost' element={<Navigate replace to="/posts"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
