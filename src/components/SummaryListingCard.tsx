import { Atom, useAtomValue } from 'jotai'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { familyPromotionAtom, totalPeopleNumberAtom } from '@/storage/peopleAtom.ts'
import { cn } from '@/lib/utils.ts'

interface SummaryListingCardProps {
  title: string
  atom: Atom<number>
  isFinal?: boolean
}

const SummaryListingCard = ({ title, atom, isFinal = false }: SummaryListingCardProps) => {
  const price = useAtomValue(atom)
  const totalPeopleNumber = useAtomValue(totalPeopleNumberAtom)
  const isFamilyPromotion = useAtomValue(familyPromotionAtom)
  if (!price) return null
  return (
    <Card className={cn('w-full lg:min-w-96', isFinal && 'bg-gray-100')}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{`for ${totalPeopleNumber} ${totalPeopleNumber < 2 ? 'person' : 'people'}${isFinal && isFamilyPromotion ? ' - Family discount!' : ''}`}</CardDescription>
      </CardHeader>
      <CardContent className="min-w-60 pb-1"></CardContent>
      {isFinal ? (
        <CardFooter className="flex-row justify-between">
          <p>Total price:</p>
          <div className="flex items-center gap-4">
            <span className="text-xs">{isFamilyPromotion && '(with -20%)'}</span>{' '}
            <span>${price}</span>
          </div>
        </CardFooter>
      ) : (
        <CardFooter className="flex-row justify-between">
          <p>Price:</p>
          <p>${price}</p>
        </CardFooter>
      )}
    </Card>
  )
}

export default SummaryListingCard
