import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../API/index';

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error('No player ID provided');
      return;
    }
    fetchSinglePlayer(id)
      .then((playerData) => {
        if (playerData) {
          setPlayer(playerData);
        } else {
          console.error("error", playerData);
        }
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    // Render all the information we get 
    <div>
      <h1>{player.name}</h1>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <img src={player.imageUrl} alt="Player" />
      <p>CreatedAt: {player.createdAt}</p>
      <p>UpdatedAt: {player.updatedAt}</p>
      <p>TeamID: {player.teamId}</p>
      <p>CohortID: {player.cohortId}</p>
    </div>
  );
};

export default SinglePlayer;
