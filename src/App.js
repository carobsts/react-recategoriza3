import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import RouterCenter from './Routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterCenter/>
    </ThemeProvider>
  );
}

export default App;