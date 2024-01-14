import '@mantine/core/styles.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Dashboard } from './Pages/Dashboard';
import { MantineProvider } from '@mantine/core';

function App() {
  const client = new QueryClient({})



  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <MantineProvider>

      <Router>
      <header className="App-header">
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      </Routes>
      </header>
      </Router>
      </MantineProvider>

      </QueryClientProvider>
    </div>
  );
}

export default App;
