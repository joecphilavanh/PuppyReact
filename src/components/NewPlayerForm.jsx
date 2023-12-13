import React, { useState } from 'react';
import { addPlayer } from '../API/index';

const NewPlayerForm = ({ onAddPlayer }) => {
    const [playerName, setPlayerName] = useState('');
    const [playerBreed, setPlayerBreed] = useState('');
    const [playerStatus, setPlayerStatus] = useState('bench');
    const [playerImageUrl, setPlayerImageUrl] = useState('');
  
    const handleAddPlayer = async () => {
     
      if (!playerName || !playerBreed) {
        console.error('Name and Breed are required');
        return;
      }
  
      try {
        const addedPlayer = await addPlayer({
            name: playerName,
            breed: playerBreed,
            status: playerStatus,
            imageUrl: playerImageUrl,
          });
          
  
        if (addedPlayer) {
          onAddPlayer(addedPlayer);
        } else {
          console.log('error');
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
  
    return (
      <div>
        <label>
          Name:
          <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
        </label>
        <br />
        <label>
          Breed:
          <input type="text" value={playerBreed} onChange={(e) => setPlayerBreed(e.target.value)} />
        </label>
        <br />
        <label>
          Status:
          <select value={playerStatus} onChange={(e) => setPlayerStatus(e.target.value)}>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={playerImageUrl} onChange={(e) => setPlayerImageUrl(e.target.value)} />
        </label>
        <br />
        <button onClick={handleAddPlayer}>Add Player</button>
      </div>
    );
  };
  
  export default NewPlayerForm;
  