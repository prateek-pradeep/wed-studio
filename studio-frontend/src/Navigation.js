import * as React from 'react';
import {KeyboardArrowLeft as RestoreIcon, KeyboardArrowRight as FavoriteIcon} from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/';
import {Box, CssBaseline, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";

export default function Navigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
//   const [messages, setMessages] = React.useState(() => refreshMessages());

//   React.useEffect(() => {
//     ref.current.ownerDocument.body.scrollTop = 0;
//     setMessages(refreshMessages());
//   }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          className='page-bottom-navigation'
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction className="page-navigation-left" label="Back" icon={<RestoreIcon />} />
          <BottomNavigationAction className="page-navigation-right" label="Start Project" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

