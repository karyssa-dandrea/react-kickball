import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerList from '../../components/PlayerFunction/PlayerList';
import './Players.css';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>List of Players</h1>
      <PlayerList players={players} />
    </div>
  );
}
