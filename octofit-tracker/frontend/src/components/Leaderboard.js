import React, { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_CODESPACE_NAME
  ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setEntries(results);
        console.log('Fetched leaderboard:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, []);

    const apiUrl = process.env.REACT_APP_CODESPACE_NAME
      ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
      : 'http://localhost:8000/api/leaderboard/';

    useEffect(() => {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          const results = data.results || data;
          setEntries(results);
          console.log('Fetched leaderboard:', results);
          console.log('API endpoint:', apiUrl);
        });
    }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>{entry.user?.name || 'Unknown'} - {entry.points} pts</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
