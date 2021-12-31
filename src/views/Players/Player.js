import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerDetail from './Players';
export default function Player(props) {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="player-deets">
      <h1>Players</h1>
      <p>{player.name}</p>
      <PlayerDetail player={player} />
    </div>
  );
}
