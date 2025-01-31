import { Fragment } from 'react'
import { Separator } from '@/components/ui/separator'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils.ts'

interface StepIndicatorProps {
  activeStep?: number
}

const StepIndicator = ({ activeStep = 1 }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((step) => (
        <Fragment key={step}>
          <div
            className={cn(
              'm-[5px] flex h-[40px] w-[40px] items-center justify-center rounded-full border-[2px]',
              step < activeStep && 'bg-primary text-white',
              step === activeStep && 'border-primary text-primary',
            )}
          >
            {step >= activeStep ? step : <Check className="h-5 w-5" />}
          </div>
          {step !== 5 && (
            <Separator
              orientation="horizontal"
              className={cn('h-[2px] w-5 lg:w-[100px]', step <= activeStep - 1 && 'bg-primary')}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default StepIndicator
