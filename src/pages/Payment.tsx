import { useNavigate } from 'react-router'
import stripe from '@/assets/stripe.svg'
import { PURCHASE_ROUTES } from '@/const'

const Payment = () => {
  const navigate = useNavigate()

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      <p>Secure payment:</p>
      <img
        src={stripe}
        alt="Stripe"
        className="w-48 cursor-pointer rounded-xl border border-gray-200 bg-card px-8 py-4 text-card-foreground shadow"
        onClick={() => navigate(PURCHASE_ROUTES.CONFIRMATION)}
      />
    </div>
  )
}

export default Payment
