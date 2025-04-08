import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link 
    className="exercise-card" 
    to={`/exercise/${exercise.id}`}
    aria-label={`View details for ${exercise.name} exercise`}
  >
    <img src={exercise.gifUrl} alt={`${exercise.name} exercise demonstration`} loading="lazy" />
    <Stack direction="row" spacing={1}>
      <Button
        disabled
        sx={{ 
          ml: '21px', 
          color: '#fff', 
          background: '#FFA9A9', 
          fontSize: '14px', 
          borderRadius: '20px', 
          textTransform: 'capitalize',
          '&.Mui-disabled': {
            color: '#fff',
            background: '#FFA9A9',
          }
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        disabled
        sx={{ 
          ml: '21px', 
          color: '#fff', 
          background: '#FCC757', 
          fontSize: '14px', 
          borderRadius: '20px', 
          textTransform: 'capitalize',
          '&.Mui-disabled': {
            color: '#fff',
            background: '#FCC757',
          }
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography 
      ml="21px" 
      color="#000" 
      fontWeight="bold" 
      sx={{ fontSize: { lg: '24px', xs: '20px' } }} 
      mt="11px" 
      pb="10px" 
      textTransform="capitalize"
      component="h3"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
