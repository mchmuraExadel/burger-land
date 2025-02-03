import { useAtomValue } from 'jotai/index'
import { NavLink } from 'react-router'
import AdditionCard from '@/components/AdditionCard.tsx'
import { totalPeopleNumberAtom } from '@/storage/peopleAtom.ts'
import SummaryCard from '@/components/SummaryCard.tsx'
import { BURGER_MUSICAL, BURGER_PLANETARIUM, BURGER_RESTAURANT, PURCHASE_ROUTES } from '@/const'
import { musicalAtom, restaurantAtom, planetariumAtom } from '@/storage/additionalsAtom.ts'
import { Button } from '@/components/ui/button.tsx'
import { dateAndPeopleSelectedAtom } from '@/storage/dateAndPeopleSelectedAtom.ts'
import useRedirectIfConditionNotMet from '@/hooks/useRedirectIfConditionNotMet.ts'

const Additional = () => {
  const totalPeopleNumber = useAtomValue(totalPeopleNumberAtom)
  const isDateAndPeopleSelected = useAtomValue(dateAndPeopleSelectedAtom)

  useRedirectIfConditionNotMet(isDateAndPeopleSelected, PURCHASE_ROUTES.START)

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex w-full flex-col gap-4">
          <AdditionCard
            title="Burger Emporium Restaraunt"
            description={`for ${totalPeopleNumber} ${totalPeopleNumber < 2 ? 'person' : 'people'}`}
            price={BURGER_RESTAURANT}
            atom={restaurantAtom}
          />
          <AdditionCard
            title="Burger Planetarium - 3D Show"
            description="Discover the galaxy of burger flavors"
            price={BURGER_PLANETARIUM}
            atom={planetariumAtom}
          />
          <AdditionCard
            title="Burger Musical Theater"
            description="Unforgatable music experience with dancing meat and vegatables"
            price={BURGER_MUSICAL}
            atom={musicalAtom}
          />
        </div>
        <div>
          <SummaryCard />
        </div>
      </div>
      <NavLink className="mt-12 flex justify-end" to={PURCHASE_ROUTES.SUMMARY} end>
        <Button>Next</Button>
      </NavLink>
    </div>
  )
}

export default Additional
