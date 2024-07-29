import React from 'react';
import{Route,Routes} from 'react-router-dom';
import{Box} from '@mui/material';

import './App.css';

function App() {
  return (
    <Box width="400px">
      <Navb/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        
      </Routes>


    </Box>
  );
}

export default App;
