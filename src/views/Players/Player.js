import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerList from './Players';
export default function Player(props) {
  const [players, setPlayers] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      setPlayers(data);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>Players</h1>
      <PlayerList players={players} />
    </div>
  );
}
