const PURCHASE_ROUTES = {
  START: '/start',
  ADDITIONAL: '/additional',
  SUMMARY: '/summary',
  LOGIN_SIGNUP: '/login-signup',
  CONTACT: '/contact',
  PAYMENT: '/payment',
  CONFIRMATION: '/confirmation',
}

const PURCHASE_STEPS = [
  {
    stepNumber: 1,
    route: PURCHASE_ROUTES.START,
    label: 'Select date and attendees',
  },
  {
    stepNumber: 2,
    route: PURCHASE_ROUTES.ADDITIONAL,
    label: 'Select additional experiences',
  },
  {
    stepNumber: 3,
    route: PURCHASE_ROUTES.SUMMARY,
    label: 'Summary',
  },
  {
    stepNumber: 4,
    route: PURCHASE_ROUTES.LOGIN_SIGNUP,
    label: 'Login or Signup',
  },
  {
    stepNumber: 5,
    route: PURCHASE_ROUTES.CONTACT,
    label: 'Contact',
  },
  {
    stepNumber: 6,
    route: PURCHASE_ROUTES.PAYMENT,
    label: 'Payment',
  },
  {
    stepNumber: 7,
    route: PURCHASE_ROUTES.CONFIRMATION,
    label: 'Confirmation',
  },
]

const ADULT_BASE_PRICE = 65
const KID_BASE_PRICE = 45
const FAMILY_PROMOTION_MULTIPLIER = 0.8

const BURGER_RESTAURANT = 30
const BURGER_PLANETARIUM = 20
const BURGER_MUSICAL = 20

export {
  ADULT_BASE_PRICE,
  BURGER_MUSICAL,
  BURGER_PLANETARIUM,
  BURGER_RESTAURANT,
  FAMILY_PROMOTION_MULTIPLIER,
  KID_BASE_PRICE,
  PURCHASE_ROUTES,
  PURCHASE_STEPS,
}
