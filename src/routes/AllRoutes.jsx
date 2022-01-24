import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import UnAuth from '../pages/UnAuth';
import Posts from '../pages/Posts';
import AddPost from '../pages/AddPost';
import EditPost from '../pages/EditPost';
import LogIn from '../pages/Login';


const AllRoutes = () => {

  //lack of state manager brings some difficulties

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkIsLoggedIn = (isLoggedInFromChild) => {
    if ( isLoggedInFromChild === true ) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login"/>}/>
        <Route exact path="/login" element={<LogIn checkIsLoggedIn={checkIsLoggedIn} />}/>
        <Route exact path="/unAuthorized" element={<UnAuth/>}/>
        { isLoggedIn &&
        <>
          <Route exact path="/posts" element={<Posts/>}/>
          <Route exact path="/addPost" element={<AddPost/>}/>
          <Route exact path="/editPost/:id" element={<EditPost/>}/>
          <Route exact path="/deletePost" element={<Navigate replace to="/posts"/>}/>
        </>
        }
        { !isLoggedIn && 
          <>
          <Route exact path="/posts" element={<Navigate replace to="/unAuthorized"/>}/>
          <Route exact path="/addPost" element={<Navigate replace to="/unAuthorized"/>}/>
          <Route exact path="/editPost/:id" element={<Navigate replace to="/unAuthorized"/>}/>
          <Route exact path="/deletePost" element={<Navigate replace to="/unAuthorized"/>}/>
        </>
        }
        <Route path="*" element={<h1>Page doesn't exist</h1>}/>  
      </Routes>
    </>
  );
};

export default AllRoutes;
