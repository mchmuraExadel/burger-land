import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Start from '@/components/Start.tsx'
import Landing from '@/components/Landing.tsx'
import PurchaseLayout from '@/layouts/PurchaseLayout.tsx'
import { PURCHASE_ROUTES } from '@/const'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PurchaseLayout />}>
          <Route path={PURCHASE_ROUTES.START} element={<Start />} />
          <Route path={PURCHASE_ROUTES.ADDITIONAL} element={<Start />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
