import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button.tsx'
import { PURCHASE_ROUTES } from '@/const'

const Confirmation = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      <p>Purchase successful 🎉</p>

      <Button onClick={() => navigate(PURCHASE_ROUTES.START)}>Back to start</Button>
    </div>
  )
}

export default Confirmation
