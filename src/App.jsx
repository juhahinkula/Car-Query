import CarList from './CarList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Container  from '@mui/material/Container'

const queryClient = new QueryClient()

function App() {
  return (
    <Container maxWidth="l">
      <QueryClientProvider client={queryClient}>
        <CarList />
      </QueryClientProvider>
    </Container>
  )
}

export default App