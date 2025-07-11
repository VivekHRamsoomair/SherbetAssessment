import React, { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/links')
      .then(res => res.json())
      .then(data => setLinks(data));
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const newLink = {
    id: crypto.randomUUID(), 
    title,
    url
  };

  await fetch('http://localhost:8000/api/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newLink),
  });

  setLinks([...links, newLink]);
  setTitle('');
  setUrl('');
};

const handleDelete = async (id) => {
  await fetch(`http://localhost:8000/api/links/${id}`, {
    method: 'DELETE',
  });

  setLinks(links.filter((link) => link.id !== id));
};

  return (
    
    <div className="App">
       <img
          src="/sherblink logo.png"
          alt="SherbLink Logo"
          style={{ width: "200px", marginBottom: "1rem" }}
        />
      <h1>SHERB LINK</h1>
      <form onSubmit={handleSubmit} className="input-wrapper">
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Enter link title"
    className="input-field"
  />
  <input
    type="url"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    placeholder="Enter link URL"
    className="input-field"
  />
  <button type="submit" className="submit-button">
    Add Link
  </button>
</form>

      <ul>
        {links.map((link) => (
  <div key={link.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: '10px', background: '#799be6', color: 'white', borderRadius: '10px', textDecoration: 'none' }}>
      {link.title}
    </a>
    <button
      onClick={() => handleDelete(link.id)}
      style={{
        marginLeft: '10px',
        background: 'red',
        color: 'white',
        border: 'none',
        padding: '6px 10px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      ✕
    </button>
  </div>
))}


      </ul>
    </div>
  );
}

export default App;
