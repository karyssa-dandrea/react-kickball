import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <div className="players-list">
      <h1>List of Players</h1>
      <ul>
        {players.map((players) => (
          <li key={players.id}>
            <Link key={players.id} to={`/players/${players.id}`}>
              {players.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
