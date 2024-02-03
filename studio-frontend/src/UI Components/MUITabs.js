import React from 'react';
import { Box, Tab } from '@mui/material';
import IconSettings from '@mui/icons-material/Settings'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { TabPanel, TabContext, TabList } from '@mui/lab';


function MUITabs() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {/* Set Tab header  */}
                    <TabList onChange={handleChange} centered>
                        <Tab value='1' icon={<IconSettings />} label="Home" />
                        <Tab value='2' icon={<IconSettings />} label="Favorite" />
                        <Tab value='3' icon={<IconSettings />} label="Profile" />
                    </TabList>
                </Box>

                {/* Set tab content */}
                <TabPanel value='1' >
                    {/* Content for Home Tab */}
                    Home Tab Content
                </TabPanel>
                <TabPanel value='2' >
                    {/* Content for Favorite Tab */}
                    Favorite Tab Content
                </TabPanel>
                <TabPanel value="3" >
                    {/* Content for Profile Tab */}
                    Profile Tab Content
                </TabPanel>
            </TabContext>
        </Box >
    );
}

export default MUITabs;


