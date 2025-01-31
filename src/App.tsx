import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Start from '@/pages/Start'
import Landing from '@/pages/Landing'
import PurchaseLayout from '@/layouts/PurchaseLayout'
import { PURCHASE_ROUTES } from '@/const'
import Additional from '@/pages/Additional'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PurchaseLayout />}>
          <Route path={PURCHASE_ROUTES.START} element={<Start />} />
          <Route path={PURCHASE_ROUTES.ADDITIONAL} element={<Additional />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
