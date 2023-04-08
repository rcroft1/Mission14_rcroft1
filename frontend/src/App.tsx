import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './pages/blah';
import MovieList from './pages/Movies';
import BaconSale from './pages/podcast';
import MovieList2 from './pages/MovieList';
import Navbar from './Navbar';
import './styles.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <TopBanner saying="Joel Hilton Movie Collection" />
//     </div>
//   );
// }

function App() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <TopBanner saying="Joel Hilton Movie Collection" />;
      break;
    case '/podcast':
      component = <BaconSale />;
      break;
    case '/Movies':
      component = <MovieList2 />;
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
