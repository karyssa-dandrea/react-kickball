import React from 'react';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
    </div>
  );
}
