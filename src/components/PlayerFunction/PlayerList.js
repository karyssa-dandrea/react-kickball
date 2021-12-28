import React from 'react';
import { Link } from 'react-router-dom';
import PlayerDetail from '../../components/PlayerFunction/PlayerDetail';

export default function PlayerList({ players }) {
  return (
    <>
      <h1>List of Players</h1>
      <div>
        <ul>
          {players.map((players) => (
            <li key={players.id}>
              <Link to={`/players/${players.id}`}>
                {players.name}
                <PlayerDetail player={players} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
