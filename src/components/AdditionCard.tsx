import { PrimitiveAtom, useAtom } from 'jotai'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Trash2 } from 'lucide-react'

interface AdditionCardProps {
  title: string
  description: string
  price: number
  atom: PrimitiveAtom<any>
}

const AdditionCard = ({ title, description, price, atom }: AdditionCardProps) => {
  const [additionStatus, setAdditionStatus] = useAtom(atom)

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-1"></CardContent>
      <CardFooter className="flex justify-between">
        <p>+${price} per person</p>
        <div className="flex items-center gap-4 text-gray-500">
          {additionStatus && (
            <Trash2 className="cursor-pointer" size={20} onClick={() => setAdditionStatus(false)} />
          )}
          <Button onClick={() => setAdditionStatus(true)} disabled={additionStatus}>
            {additionStatus ? 'Added' : 'Add'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AdditionCard
