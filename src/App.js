import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

function App() {
  const [dog, setDog] = useState({})
  const [upload, setUpload]= useState({})
  useEffect(() =>{
    fetch('https://dog.ceo/api/breeds/image/random', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setDog(data)
    })
    
  },[upload])
 
  return (
    
    <div className="App">
      <h3 ClassName="api_h2">PRACTICA "CONSUMO DE API´S"</h3>
      <Paper elevation={6}>
      <img src={dog.message} alt=""/> 
      </Paper>
      <Button variant="contained" color="secondary" onClick={() => setUpload(upload + 1)} > 
        Actualizar!
      </Button>
    </div>
  );
}

export default App;
