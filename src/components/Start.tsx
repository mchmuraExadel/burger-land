import { Calendar } from '@/components/ui/calendar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { useAtom, useAtomValue } from 'jotai'
import dateAtom from '@/storage/dateAtom.ts'
import Count from '@/components/Count.tsx'
import { adultsAtom, familyPromotionAtom, kidsAtom } from '@/storage/peopleAtom.ts'
import { Users } from 'lucide-react'
import SummaryCard from '@/components/SummaryCard.tsx'
import { Button } from '@/components/ui/button.tsx'
import { NavLink } from 'react-router'
import { PURCHASE_ROUTES } from '@/const'

const Start = () => {
  const [date, setDate] = useAtom(dateAtom)
  const familyPromotion = useAtomValue(familyPromotionAtom)

  return (
    <div>
      <div className="flex flex-col justify-center gap-12 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center">
          <h3 className="text-h3">Pick date</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => setDate(selectedDate ?? new Date())}
            className="rounded-md border"
          />
          <h3 className="text-h3">How many people?</h3>
          <Count atom={adultsAtom} maxValue={10} label="Adults" />
          <Count atom={kidsAtom} maxValue={10} label="Kids" />
          {familyPromotion && (
            <Alert className="mt-6">
              <Users className="h-4 w-4" />
              <AlertTitle>Family discount - 20%!</AlertTitle>
              <AlertDescription>You are eligible for a family discount!</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="flex w-full flex-col items-center">
          <h3 className="text-h3">Summary</h3>
          <SummaryCard />
        </div>
      </div>
      <div className="mt-12 flex justify-end">
        <NavLink to={PURCHASE_ROUTES.ADDITIONAL} end>
          <Button>Next</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Start
