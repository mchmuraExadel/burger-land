import AdditionCard from '@/components/AdditionCard.tsx'
import { useAtomValue } from 'jotai/index'
import { totalPeopleNumberAtom } from '@/storage/peopleAtom.ts'
import SummaryCard from '@/components/SummaryCard.tsx'
import { BURGER_MUSICAL, BURGER_PLANETARIUM, BURGER_RESTAURANT } from '@/const'
import { musicalAtom, restaurantAtom, planetariumAtom } from '@/storage/additionalsAtom.ts'

const Additional = () => {
  const totalPeopleNumber = useAtomValue(totalPeopleNumberAtom)
  return (
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
  )
}

export default Additional
