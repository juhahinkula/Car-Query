import CarList from './CarList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Container  from '@mui/material/Container'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const queryClient = new QueryClient()

function App() {
  return (
    <Container maxWidth="l">
      <QueryClientProvider client={queryClient}>
        <AppBar position='static' >
          <Toolbar>
            <Typography variant="h6">
              Car Shop
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack 
          mt={2} 
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
          <CarList />
        </Stack>
      </QueryClientProvider>
    </Container>
  )
}

export default App