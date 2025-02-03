import { Fragment } from 'react'
import { useLocation } from 'react-router'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils.ts'
import { PURCHASE_STEPS } from '@/const'
import burger from '@/assets/burger-icon.svg'

const StepIndicator = () => {
  const { pathname } = useLocation()
  const stepsNumbers = Object.values(PURCHASE_STEPS).map((step) => step.stepNumber)

  const getCurrentStepNumber = (currentPath: string): number => {
    const stepData = PURCHASE_STEPS.find((step) => step.route === currentPath)
    if (!stepData) {
      return PURCHASE_STEPS[0].stepNumber
    }
    return stepData.stepNumber
  }

  const activeStepNumber = getCurrentStepNumber(pathname)

  return (
    <div className="flex items-center justify-center">
      {stepsNumbers.map((step) => (
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
