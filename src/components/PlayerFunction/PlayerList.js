import React from 'react';
import { Link } from 'react-router-dom';
import PlayerDetail from '../../components/PlayerFunction/PlayerDetail';

export default function PlayerList({ players }) {
  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              {player.name}
              <PlayerDetail player={player} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
