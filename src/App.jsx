import './App.css'
import CarList from './CarList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CarList />
    </QueryClientProvider>
  )
}

export default App