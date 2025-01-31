import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { adultsAtom, familyPromotionAtom, kidsAtom } from '@/storage/peopleAtom.ts'
import { useAtomValue } from 'jotai'
import dateAtom from '@/storage/dateAtom.ts'
import { format } from 'date-fns'
import { Separator } from '@/components/ui/separator.tsx'
import { finalPriceAtom } from '@/storage/priceAtom.ts'

const SummaryCard = () => {
  const date = useAtomValue(dateAtom)
  const formattedDate = format(date, 'dd-MM-yyyy')

  const adults = useAtomValue(adultsAtom)
  const kids = useAtomValue(kidsAtom)
  const price = useAtomValue(finalPriceAtom)
  const familyPromotion = useAtomValue(familyPromotionAtom)
  return (
    <Card className="max-w-xs">
      <CardHeader>
        <CardTitle>Your order</CardTitle>
      </CardHeader>
      <CardContent className="pb-1">
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-8">
          <dt>Date:</dt>
          <dd>{formattedDate}</dd>
        </dl>
        <Separator className="my-4" />
        <p>Attendees</p>
        <dl className="my-2 grid grid-cols-2 gap-x-4 gap-y-2">
          <dt>Adults</dt>
          <dd>{adults}</dd>
          <dt>Kids</dt>
          <dd>{kids}</dd>
        </dl>
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
