import React from 'react';
import './TeamDetails.css';
import { Link } from 'react-router-dom';

export default function TeamDetail({ team }) {
  return (
    <div className="team-details">
      {team.players.map((item) => (
        <Link key={item.id} to={`/players/${item.id}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
