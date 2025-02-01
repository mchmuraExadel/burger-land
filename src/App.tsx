import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Start from '@/pages/Start'
import Landing from '@/pages/Landing'
import PurchaseLayout from '@/layouts/PurchaseLayout'
import { PURCHASE_ROUTES } from '@/const'
import Additional from '@/pages/Additional'
import Summary from '@/pages/Summary.tsx'
import LoginSignup from '@/pages/LoginSignup.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PurchaseLayout />}>
          <Route path={PURCHASE_ROUTES.START} element={<Start />} />
          <Route path={PURCHASE_ROUTES.ADDITIONAL} element={<Additional />} />
          <Route path={PURCHASE_ROUTES.SUMMARY} element={<Summary />} />
          <Route path={PURCHASE_ROUTES.LOGIN_SIGNUP} element={<LoginSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
