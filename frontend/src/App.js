import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommitsTable from './Components/CommitsTable';

function App() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/commits/ecruzs/git-commit-history')
      .then(response => {
        setCommits(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los commits", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-2xl font-bold text-center mb-5">Historial de Commits</h1>
      <CommitsTable commits={commits} />
    </div>
  );
}

export default App;
