import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error, Linkedin, Twitter,DeveloperFact } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <AuthWrapper>   
        <Router>
            <Routes>
                <Route path='/' element={
                  <PrivateRoute path='/' exact={true}>
                    <Dashboard/>
                  </PrivateRoute>
                }/>
                <Route path='/linkedin' element={
                  <PrivateRoute path='/linkedin' exact={true}>
                    <Linkedin/>
                  </PrivateRoute>
                }/>
                <Route path='/twitter' element={
                  <PrivateRoute path='/linkedin' exact={true}>
                    <Twitter/>
                  </PrivateRoute>
                }/>
                <Route path='/fact' element={
                  <PrivateRoute path='/fact' exact={true}>
                    <DeveloperFact/>
                  </PrivateRoute>
                }/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </Router> 
    </AuthWrapper>    
  );
}

export default App;
