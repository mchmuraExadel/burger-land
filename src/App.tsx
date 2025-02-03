import { BrowserRouter, Route, Routes } from 'react-router'
import Start from '@/pages/Start'
import Landing from '@/pages/Landing'
import PurchaseLayout from '@/layouts/PurchaseLayout'
import { PURCHASE_ROUTES } from '@/const'
import Additional from '@/pages/Additional'
import Summary from '@/pages/Summary.tsx'
import LoginSignup from '@/pages/LoginSignup.tsx'
import { Toaster } from '@/components/ui/toaster'
import Contact from '@/pages/Contact.tsx'
import Payment from '@/pages/Payment.tsx'
import Confirmation from '@/pages/Confirmation.tsx'
import './App.css'

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
          <Route path={PURCHASE_ROUTES.CONTACT} element={<Contact />} />
          <Route path={PURCHASE_ROUTES.PAYMENT} element={<Payment />} />
          <Route path={PURCHASE_ROUTES.CONFIRMATION} element={<Confirmation />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
