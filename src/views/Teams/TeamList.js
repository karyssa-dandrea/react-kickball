import React from 'react';
import { useState, useEffect } from 'react';

export default function TeamList(props) {
  const id = props.match.params.id;
  const [team, setTeams] = useState(null);

  useEffect(() => {});
  return <div></div>;
}
