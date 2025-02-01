import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { adultsAtom, familyPromotionAtom, kidsAtom } from '@/storage/peopleAtom.ts'
import { useAtomValue } from 'jotai'
import dateAtom from '@/storage/dateAtom.ts'
import { format } from 'date-fns'
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
    <Card className="max-w-xs">
      <CardHeader>
        <CardTitle>Your order</CardTitle>
      </CardHeader>
      <CardContent className="min-w-60 pb-1">
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-8">
          <dt className="w-24">Date:</dt>
          <dd className="w-24">{date && format(date, 'dd-MM-yyyy')}</dd>
        </dl>
        <Separator className="my-4" />
        <p>Attendees</p>
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-2">
          <dt>Adults</dt>
          <dd>{adults}</dd>
          <dt>Kids</dt>
          <dd>{kids}</dd>
        </dl>
        {isAnyAdditional && (
          <>
            <Separator className="my-4" />
            <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-2">
              {!!restaurantPrice && <dt>Restaurant</dt>}
              {!!restaurantPrice && <dt>${restaurantPrice}</dt>}
              {!!planetariumPrice && <dt>Planetarium</dt>}
              {!!planetariumPrice && <dt>${planetariumPrice}</dt>}
              {!!musicalPrice && <dt>Musical</dt>}
              {!!musicalPrice && <dt>${musicalPrice}</dt>}
            </dl>
          </>
        )}
        <Separator className="my-4" />
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-2">
          <dt>Total:</dt>
          <dd>${price}</dd>
          <dt></dt>
          <dd className="text-xs">{familyPromotion && '(with -20%)'}</dd>
        </dl>
      </CardContent>
    </Card>
  )
}

export default SummaryCard
