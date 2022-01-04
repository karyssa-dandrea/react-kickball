import React from 'react';
import './PlayerDetails.css';

export default function PlayerDetail({ player }) {
  return (
    <div className="player-details">
      {/* <h3>{player.name}</h3> */}
      <p>Position: {player.position}</p>
    </div>
  );
}
