import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamById } from '../../services/teams';

export default function TeamList(props) {
  const id = props.match.params.id;
  const [team, setTeams] = useState(null);

  useEffect(() => {
    getTeams();
  }, []);
  const getTeams = async () => {
    const resp = await fetchTeamById();
    setTeams(resp);
  };

  return <div></div>;
}
