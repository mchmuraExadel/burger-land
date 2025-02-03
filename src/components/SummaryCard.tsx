import { useAtomValue } from 'jotai'
import { format } from 'date-fns'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { adultsAtom, familyPromotionAtom, kidsAtom } from '@/storage/peopleAtom.ts'
import { dateAtom } from '@/storage/dateAtom.ts'
import { Separator } from '@/components/ui/separator.tsx'
import {
  finalPriceAtom,
  musicalPriceAtom,
  planetariumPriceAtom,
  restaurantPriceAtom,
} from '@/storage/priceAtom.ts'
import { isAnyAdditionalSelectedAtom } from '@/storage/additionalsAtom.ts'

const SummaryCard = () => {
  const date = useAtomValue(dateAtom)
  const adults = useAtomValue(adultsAtom)
  const kids = useAtomValue(kidsAtom)
  const price = useAtomValue(finalPriceAtom)
  const familyPromotion = useAtomValue(familyPromotionAtom)
  const isAnyAdditional = useAtomValue(isAnyAdditionalSelectedAtom)
  const restaurantPrice = useAtomValue(restaurantPriceAtom)
  const planetariumPrice = useAtomValue(planetariumPriceAtom)
  const musicalPrice = useAtomValue(musicalPriceAtom)

  return (
    <Card className="w-full lg:w-fit">
      <CardHeader>
        <CardTitle>Your order</CardTitle>
      </CardHeader>
      <CardContent className="min-w-60 pb-1">
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-8">
          <dt>Date:</dt>
          <dd className="text-nowrap text-right">{date && format(date, 'dd-MM-yyyy')}</dd>
        </dl>
        <Separator className="my-4" />
        <p>Attendees</p>
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-2">
          <dt>Adults</dt>
          <dd className="text-right">{adults}</dd>
          <dt>Kids</dt>
          <dd className="text-right">{kids}</dd>
        </dl>
        {isAnyAdditional && (
          <>
            <Separator className="my-4" />
            <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-2">
              {!!restaurantPrice && <dt>Restaurant</dt>}
              {!!restaurantPrice && <dd className="text-right">${restaurantPrice}</dd>}
              {!!planetariumPrice && <dt>Planetarium</dt>}
              {!!planetariumPrice && <dd className="text-right">${planetariumPrice}</dd>}
              {!!musicalPrice && <dt>Musical</dt>}
              {!!musicalPrice && <dd className="text-right">${musicalPrice}</dd>}
            </dl>
          </>
        )}
        <Separator className="my-4" />
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-2">
          <dt>Total:</dt>
          <dd className="text-right">${price}</dd>
          <dt></dt>
          <dd className="text-right text-xs">{familyPromotion && '(with -20%)'}</dd>
        </dl>
      </CardContent>
    </Card>
  )
}

export default SummaryCard
