import { NavLink } from 'react-router'
import { useAtom, useAtomValue } from 'jotai'
import { Calendar } from '@/components/ui/calendar'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { dateAtom } from '@/storage/dateAtom'
import Count from '@/components/Count'
import { adultsAtom, familyPromotionAtom, kidsAtom } from '@/storage/peopleAtom'
import { Users } from 'lucide-react'
import SummaryCard from '@/components/SummaryCard'
import { Button } from '@/components/ui/button'
import { ADULT_BASE_PRICE, KID_BASE_PRICE, PURCHASE_ROUTES } from '@/const'
import { dateAndPeopleSelectedAtom } from '@/storage/dateAndPeopleSelectedAtom.ts'

const Start = () => {
  const [date, setDate] = useAtom(dateAtom)
  const isDateAndPeopleSelected = useAtomValue(dateAndPeopleSelectedAtom)
  const isFamilyPromotion = useAtomValue(familyPromotionAtom)

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center gap-12 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center">
          <h3 className="text-h3">Pick date</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => setDate(selectedDate ?? new Date())}
            className="mb-6 rounded-md border"
          />
          <h3 className="text-h3">How many people?</h3>
          <Count atom={adultsAtom} maxValue={10} label={`Adults $${ADULT_BASE_PRICE}`} />
          <Count atom={kidsAtom} maxValue={10} label={`Kids $${KID_BASE_PRICE}`} />
          {isFamilyPromotion && (
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
        {isDateAndPeopleSelected ? (
          <NavLink to={PURCHASE_ROUTES.ADDITIONAL} end>
            <Button>Next</Button>
          </NavLink>
        ) : (
          <Button disabled>Next</Button>
        )}
      </div>
    </div>
  )
}

export default Start
