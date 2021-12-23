import React from 'react';

// Routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//style
import { GlobalStyle } from './GlobalStyles';

//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Home />
//       <GlobalStyle />
//     </div>
//   );
// }

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
