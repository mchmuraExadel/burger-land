import { Outlet, useLocation } from 'react-router'
import StepIndicator from '@/components/StepIndicator'
import { PURCHASE_ROUTES } from '@/const'

function PurchaseLayout() {
  const location = useLocation()
  const { pathname } = location
  const getPageName = (currentPath: string): string => {
    switch (currentPath) {
      case PURCHASE_ROUTES.START:
        return 'Select date and attendees'
      case PURCHASE_ROUTES.ADDITIONAL:
        return 'Select additional experiences'
      case PURCHASE_ROUTES.SUMMARY:
        return 'Summary'
      case PURCHASE_ROUTES.LOGIN_SIGNUP:
        return 'Login or Signup'
      case PURCHASE_ROUTES.CONTACT:
        return 'Contact'
      case PURCHASE_ROUTES.PAYMENT:
        return 'Payment'
      case PURCHASE_ROUTES.CONFIRMATION:
        return 'Confirmation'
      default:
        return ''
    }
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <header>
        <nav>
          <StepIndicator />
        </nav>
        <h2 className="text-h2">{getPageName(pathname)}</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default PurchaseLayout
