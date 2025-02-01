import { Fragment } from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils.ts'
import { PURCHASE_ROUTES } from '@/const'
import { useLocation } from 'react-router'
import burger from '@/assets/burger-icon.svg'

const StepIndicator = () => {
  const location = useLocation()
  const { pathname } = location

  const getStep = (currentPath: string): number => {
    switch (currentPath) {
      case PURCHASE_ROUTES.START:
        return 1
      case PURCHASE_ROUTES.ADDITIONAL:
        return 2
      case PURCHASE_ROUTES.SUMMARY:
        return 3
      case PURCHASE_ROUTES.LOGIN_SIGNUP:
        return 4
      case PURCHASE_ROUTES.CONTACT:
        return 5
      case PURCHASE_ROUTES.PAYMENT:
        return 6
      case PURCHASE_ROUTES.CONFIRMATION:
        return 7
      default:
        return 1
    }
  }

  const activeStepNumber = getStep(pathname)

  return (
    <div className="flex items-center justify-center">
      {[1, 2, 3, 4, 5, 6, 7].map((step) => (
        <Fragment key={step}>
          <div
            className={cn(
              'm-[5px] flex h-[40px] w-[40px] items-center justify-center rounded-full border-[2px]',
              step < activeStepNumber && 'bg-primary text-white',
              step === activeStepNumber && 'border-primary text-primary',
            )}
          >
            {step >= activeStepNumber ? step : <img src={burger} className="w-6" alt="hamburger" />}
          </div>
          {step !== 7 && (
            <Separator
              orientation="horizontal"
              className={cn(
                'h-[2px] w-1 lg:w-[60px]',
                step <= activeStepNumber - 1 && 'bg-primary',
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default StepIndicator
