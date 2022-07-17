import './App.css';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// all component import from index
import { Actors, Movies, MovieInformation, NavBar, Profile } from './index';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <h1>Warp video share</h1>
    </div>
  );
}

export default App;
