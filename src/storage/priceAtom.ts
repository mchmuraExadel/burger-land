import { atom } from 'jotai'
import { adultsAtom, kidsAtom, familyPromotionAtom } from './peopleAtom'
import { ADULT_BASE_PRICE, FAMILY_PROMOTION_MULTIPLIER, KID_BASE_PRICE } from '@/const'

const basePriceAtom = atom(
  (get) => get(adultsAtom) * ADULT_BASE_PRICE + get(kidsAtom) * KID_BASE_PRICE,
)

const finalPriceAtom = atom((get) =>
  get(familyPromotionAtom) ? get(basePriceAtom) * FAMILY_PROMOTION_MULTIPLIER : get(basePriceAtom),
)

export { finalPriceAtom }
