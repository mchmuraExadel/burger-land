import { useAtom, PrimitiveAtom } from 'jotai'
import { Button } from '@/components/ui/button.tsx'

interface CountProps {
  atom: PrimitiveAtom<number>
  maxValue: number
  label: string
}

const Count = ({ atom, maxValue, label }: CountProps) => {
  const [count, setCount] = useAtom(atom)
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }
  const increment = () => {
    if (count < maxValue) {
      setCount(count + 1)
    } else {
      setCount(maxValue)
    }
  }
  return (
    <div className="my-2 flex flex-row items-center gap-8">
      <span className="w-20">{label}</span>
      <Button onClick={decrement} disabled={count <= 0}>
        -
      </Button>
      <div className="w-2 text-center">{count}</div>
      <Button onClick={increment} disabled={count >= maxValue}>
        +
      </Button>
    </div>
  )
}

export default Count
