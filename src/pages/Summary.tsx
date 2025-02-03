import { NavLink } from 'react-router'
import { useAtomValue } from 'jotai'
import { format } from 'date-fns'
import SummaryListingCard from '@/components/SummaryListingCard.tsx'
import {
  basePriceAtom,
  finalPriceAtom,
  musicalPriceAtom,
  planetariumPriceAtom,
  restaurantPriceAtom,
} from '@/storage/priceAtom'
import { dateAtom } from '@/storage/dateAtom.ts'
import { PURCHASE_ROUTES } from '@/const'
import { Button } from '@/components/ui/button.tsx'
import { dateAndPeopleSelectedAtom } from '@/storage/dateAndPeopleSelectedAtom.ts'
import useRedirectIfConditionNotMet from '@/hooks/useRedirectIfConditionNotMet.ts'

const Summary = () => {
  const date = useAtomValue(dateAtom)
  const isDateAndPeopleSelected = useAtomValue(dateAndPeopleSelectedAtom)

  useRedirectIfConditionNotMet(isDateAndPeopleSelected, PURCHASE_ROUTES.START)

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <SummaryListingCard
          atom={basePriceAtom}
          title={`Base Tickets - date: ${format(date, 'dd-MM-yyyy')}`}
        />
        <SummaryListingCard atom={restaurantPriceAtom} title="Burger Emporium Restaraunt" />
        <SummaryListingCard atom={planetariumPriceAtom} title="Burger Planetarium - 3D Show" />
        <SummaryListingCard atom={musicalPriceAtom} title="Burger Musical Theater" />
        <SummaryListingCard atom={finalPriceAtom} title="Burger Land final price" isFinal />
      </div>
      <div className="mt-12 flex justify-between">
        <NavLink to={PURCHASE_ROUTES.START} end>
          <Button variant="outline">Modify order</Button>
        </NavLink>
        <NavLink to={PURCHASE_ROUTES.LOGIN_SIGNUP} end>
          <Button>Next</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Summary
