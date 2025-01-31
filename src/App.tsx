import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Start from '@/components/Start.tsx'
import Landing from '@/components/Landing.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
