
/*fetch a list of all the animals(Players)and put them into an empty array*/
const fetchPlayers = async () => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players');
      const playersData = await response.json();
      return playersData.data.players;
    } catch (error) {
      console.error('Error', error);
      return [];
    }
  };
  /*fetch information on single players from the provided playerId */
  const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players/${playerId}`);
      const singlePlayerData = await response.json();
      return singlePlayerData.data.player;
    } catch (error) {
      console.error('Error', error);
      return null;
    }
  };
  //add new player to the list
  const addPlayer = async (newPlayer) => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayer),
      });
      const responseData = await response.json();  
      if (response.ok) {
        return responseData.data.player;
      } else {
        throw new Error(responseData.error.message || 'Failed to add player');
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  export { fetchPlayers, fetchSinglePlayer, addPlayer };
  