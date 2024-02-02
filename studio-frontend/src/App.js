
import * as React from 'react';
import './App.css';
import { createTheme } from '@mui/material';
import LektonRegular from './fonts/Lekton-Regular.ttf';
import {Skeleton} from '@mui/material';
import Navigation from './Navigation';
import AddIcon from '@mui/icons-material/Add';
import CameraSharpIcon from '@mui/icons-material/CameraSharp';
import { MuiTypogrpahy } from './UI Components/MuiTypogrpahy';

const theme = createTheme({
  typography: {
    fontFamily: 'Lekton, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Lekton';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Lekton'), local('Lekton-Regular'), url(${LektonRegular}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

// ...
return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        fontFamily: 'Lekton',
      }}
    >
      Lekton
    </Box>
  </ThemeProvider>
);


export default function App() {
  const [page, setPage] = React.useState(0);

  return <div className='App'>
      <header className='App-header'>
        <CameraSharpIcon class="app-logo"/>
        <h3>Welcome user,</h3>
        <div className='app-link'>Click <AddIcon className='add-icon' onClick={(event, newValue) => {
            setPage(newValue);
          }}/> to start a project </div>
          <MuiTypogrpahy/> 
      </header>
    </div>
}
