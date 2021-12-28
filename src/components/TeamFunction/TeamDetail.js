import React from 'react';
import './TeamDetail.css';

export default function TeamDetail({ team }) {
  return (
    <div>
      <h3>{team.name}</h3>
    </div>
  );
}
