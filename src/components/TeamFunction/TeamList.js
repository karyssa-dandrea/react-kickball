import React from 'react';
import { Link } from 'react-router-dom';
import TeamDetail from '../../views/Teams/Team';

export default function TeamList({ teams }) {
  return (
    <div>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>
              {team.name}
              <TeamDetail team={team} />
            </Link>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}
