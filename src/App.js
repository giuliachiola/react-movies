import React from 'react';
// Routing
import { BrowserRouter as Router, Routes } from 'react-router-dom';
// Components
import Header from './components/Header'
// Pages
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
// Context
import UserProvider from './context';
// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <UserProvider>
      <Header />

      <Routes>
        <Routes path='/' element={<Home />} />
        <Routes path='/login' element={<Login />} />
        <Routes path='/:movieId' element={<Movie />} />
        <Routes path='/*' element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </UserProvider>
  </Router>
)

export default App;
