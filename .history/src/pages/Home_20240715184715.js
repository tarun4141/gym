import React, {useState} from 'react'
import{Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';


const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises/>
        <Exercise
    </Box>
  )
}

export default Home