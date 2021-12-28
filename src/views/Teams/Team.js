import React from 'react';
import TeamDetail from '../../components/TeamFunction/TeamDetail';
import { fetchTeamById } from '../../services/teams';
import { useEffect, useState } from 'react';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
    };
    fetchData();
  }, [id]);
  return (
    <div className="team-deets">
      <p>{team.name}</p>
      <p>{team.city}</p>
      <p>{team.state}</p>
      <TeamDetail team={team}></TeamDetail>
    </div>
  );
}

// make and add a teamdetail component
// write function for getteambyId
// pass an id on line 10 into that function
//7 1/2 define a const id using params.match
