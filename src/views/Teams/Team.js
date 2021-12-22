import React from 'react';
import TeamDetail from '../../components/TeamFunction/TeamDetail';
import { fetchTeamById } from '../../services/teams';
import { useEffect, useState } from 'react';

export default function Team() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById();
      setTeam(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <TeamDetail></TeamDetail>
    </div>
  );
}

// make and add a teamdetail component
// write function for getteambyId
// pass an id on line 10 into that function
//7 1/2 define a const id using params.match
