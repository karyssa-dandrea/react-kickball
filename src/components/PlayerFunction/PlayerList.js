import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <>
      <h1>List of Players</h1>
      <div className="players-list">
        {players.map((players) => (
          <Link key={players.id} to={`/players/${players.id}`}>
            {players.name}
          </Link>
        ))}
      </div>
    </>
  );
}
