import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//Add a all player function
const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
// create a hook to fetch data
  useEffect(() => {
    const fetchData = async () => {
      const cohortName = "2310-fsa-et-web-ft-sf"; 
      const apiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

      try {
        const response = await fetch(apiUrl);
        const puppyBowlData = await response.json();

        if (puppyBowlData && puppyBowlData.data && puppyBowlData.data.players) {
          setPlayers(puppyBowlData.data.players);
        } else {
          console.error("error", puppyBowlData);
        }
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData(); 
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>All Players</h1>
      <input
        type="text"
        placeholder="Search by name here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
