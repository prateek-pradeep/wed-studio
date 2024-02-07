import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconSettings from '@mui/icons-material/Settings'


function TabGroup({ tabCount, iconTypes, tabText }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}
    sx={{
      marginBottom: 1 
    }}>
      {[...Array(tabCount).keys()].map((index) => (
        <Tab
          key={index}
          icon = {iconTypes[index]}
          label={tabText[index]}
        />
      ))}
    </Tabs>
  );
}


export default TabGroup;
