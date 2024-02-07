import React from 'react';
import IconButton from '@mui/material/IconButton';
import IconSettings from '@mui/icons-material/Settings'


function IconButtons({ isPrimaryCOllection }) {
  const handleButtonClick = (buttonNumber) => {
    console.log(`Button ${buttonNumber} clicked`);
    // Add your button click logic here
  };

  return (
    <div>
      {isPrimaryCOllection.map((isPrimary, buttonNumber) => (
        <IconButton
          key={buttonNumber}
          color={isPrimary ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick(buttonNumber + 1)}
        >
          <IconSettings fontSize="large" />
        </IconButton>
      ))}
    </div>
  );
}

export default IconButtons;

