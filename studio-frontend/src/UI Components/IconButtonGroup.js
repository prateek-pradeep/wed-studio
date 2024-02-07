import React from 'react';
import { IconButton, ButtonGroup } from '@mui/material';
import IconSettings from '@mui/icons-material/Settings'
import './MUIStyling.css'


function IconButtonGroup({ buttonTypes }) {
  const handleButtonClick = (buttonNumber) => {
    
    console.log(`Button ${buttonNumber} clicked`);
    // Add your button click logic here
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" className="buttonGroupBorderRadius" >
      {buttonTypes.map((isPrimary, buttonNumber) => (
        <IconButton
          key={buttonNumber}
          color={isPrimary ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick(buttonNumber + 1)}
        >
          <IconSettings fontSize="large" />
        </IconButton>
      ))}
    </ButtonGroup>
  );
}

export default IconButtonGroup;

