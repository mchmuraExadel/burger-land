import { Outlet, useLocation } from 'react-router'
import StepIndicator from '@/components/StepIndicator'
import { PURCHASE_STEPS } from '@/const'

function PurchaseLayout() {
  const { pathname } = useLocation()

  const getCurrentPageName = (currentPath: string): string => {
    const stepData = PURCHASE_STEPS.find((step) => step.route === currentPath)
    if (!stepData) {
      return PURCHASE_STEPS[0].label
    }
    return stepData.label
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <header>
        <nav>
          <StepIndicator />
        </nav>
        <h2 className="text-h2">{getCurrentPageName(pathname)}</h2>
      </header>
      <main className="mb-6">
        <Outlet />
      </main>
    </div>
  )
}

export default PurchaseLayout
