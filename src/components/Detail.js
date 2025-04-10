import React from 'react';
import { Typography, Stack, IconButton } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      label: 'Body Part'
    },
    {
      icon: TargetImage,
      name: target,
      label: 'Target Muscle'
    },
    {
      icon: EquipmentImage,
      name: equipment,
      label: 'Equipment'
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={`${name} exercise demonstration`} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography 
          component="h1" 
          sx={{ fontSize: { lg: '64px', xs: '30px' } }} 
          fontWeight={700} 
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography 
          component="p"
          sx={{ fontSize: { lg: '24px', xs: '18px' } }} 
          color="#4F4C4C"
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best exercises to target your {target}. It will help you improve your{' '}
          mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <IconButton 
              aria-label={item.label}
              sx={{ 
                background: '#FFF2DB', 
                borderRadius: '50%', 
                width: '100px', 
                height: '100px',
                '&:hover': {
                  background: '#FFF2DB'
                }
              }}
              disableRipple
            >
              <img src={item.icon} alt="" style={{ width: '50px', height: '50px' }} aria-hidden="true" />
            </IconButton>
            <Typography 
              component="span"
              textTransform="capitalize" 
              sx={{ fontSize: { lg: '30px', xs: '20px' } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
