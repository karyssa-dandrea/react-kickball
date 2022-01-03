import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerDetails.css';

export default function PlayerList({ players }) {
  return (
    <>
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
