// App.jsx
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/singlePlayer';
import NewPlayerForm from './components/NewPlayerForm';

const App = () => {
  const [playerList, setPlayerList] = useState([]);

  const handleAddPlayer = (newPlayer) => {
    setPlayerList([...playerList, newPlayer]);
  };

  return (
    <div>
      <h1>Puppy Names</h1>
      <NewPlayerForm onAddPlayer={handleAddPlayer} />
      <Routes>
        <Route path="/" element={<AllPlayers playerList={playerList} />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
};

export default App;
