import { useNavigate } from 'react-router'
import { useResetAtom } from 'jotai/utils'
import { Button } from '@/components/ui/button.tsx'
import { PURCHASE_ROUTES } from '@/const'
import { dateAtom } from '@/storage/dateAtom.ts'
import { adultsAtom, kidsAtom } from '@/storage/peopleAtom.ts'
import { musicalAtom, planetariumAtom, restaurantAtom } from '@/storage/additionalsAtom.ts'

const Confirmation = () => {
  const navigate = useNavigate()

  const atomsToReset = [
    dateAtom,
    adultsAtom,
    kidsAtom,
    restaurantAtom,
    planetariumAtom,
    musicalAtom,
  ]

  const resetters = atomsToReset.map((atom) => useResetAtom(atom))

  const handleBackClick = () => {
    resetters.forEach((reset) => reset())
    navigate(PURCHASE_ROUTES.START)
  }

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      <p>Purchase successful 🎉</p>

      <Button onClick={() => handleBackClick()}>Back to start</Button>
    </div>
  )
}

export default Confirmation
