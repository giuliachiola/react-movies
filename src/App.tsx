import React from 'react';
// Routing
import { BrowserRouter as Router, Routes } from 'react-router-dom';
// Components
import Header from './components/Header'
// Pages
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
  <Router>
    <Header />

    <Routes>
      {/* @ts-ignore */}
      <Routes path='/' element={<Home />} />
      {/* @ts-ignore */}
      <Routes path='/:movieId' element={<Movie />} />
      {/* @ts-ignore */}
      <Routes path='/*' element={<NotFound />} />
    </Routes>

    <GlobalStyle />
  </Router>
)

export default App;
