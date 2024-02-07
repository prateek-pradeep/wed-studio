import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

//icon
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';

export default function ToggleGalleryButton() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    if(newAlignment !== null)
      setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <GridOnOutlinedIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <GridViewOutlinedIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <ViewCarouselOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}