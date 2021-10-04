import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header'
// Pages
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Routes path='/' element={<Home />} />
      <Routes path='/:movieId' element={<Movie />} />
      <Routes path='/*' element={<NotFound />} />
    </Routes>

    <GlobalStyle />
  </Router>
)

export default App;
