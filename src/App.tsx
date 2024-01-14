import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import Axios from "axios"
import { Dashboard } from './Pages/Dashboard';

function App() {
  const client = new QueryClient({})



  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
      <header className="App-header">
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      </Routes>
      </header>
      </Router>

      </QueryClientProvider>
    </div>
  );
}

export default App;
