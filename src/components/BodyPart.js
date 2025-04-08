import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Button
    component={Stack}
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      border: 'none',
      borderTop: bodyPart === item ? '4px solid #000080' : 'none',
      background: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      gap: '47px',
      '&:hover': {
        background: '#fff'
      }
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
    aria-label={`Filter by ${item} exercises`}
    aria-pressed={bodyPart === item}
  >
    <img src={Icon} alt="" style={{ width: '40px', height: '40px' }} aria-hidden="true" />
    <Typography 
      fontSize="24px" 
      fontWeight="bold" 
      fontFamily="Alegreya" 
      color="#3A1212" 
      textTransform="capitalize"
      component="span"
    >
      {item}
    </Typography>
  </Button>
);

export default BodyPart;
