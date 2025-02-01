import { atom } from 'jotai'
import { adultsAtom, kidsAtom, familyPromotionAtom, totalPeopleNumberAtom } from './peopleAtom'
import {
  ADULT_BASE_PRICE,
  BURGER_MUSICAL,
  BURGER_PLANETARIUM,
  BURGER_RESTAURANT,
  FAMILY_PROMOTION_MULTIPLIER,
  KID_BASE_PRICE,
} from '@/const'
import { musicalAtom, planetariumAtom, restaurantAtom } from '@/storage/additionalsAtom.ts'

const basePriceAtom = atom(
  (get) => get(adultsAtom) * ADULT_BASE_PRICE + get(kidsAtom) * KID_BASE_PRICE,
)

const restaurantPriceAtom = atom((get) =>
  get(restaurantAtom) ? BURGER_RESTAURANT * get(totalPeopleNumberAtom) : 0,
)

const planetariumPriceAtom = atom((get) =>
  get(planetariumAtom) ? BURGER_PLANETARIUM * get(totalPeopleNumberAtom) : 0,
)
const musicalPriceAtom = atom((get) =>
  get(musicalAtom) ? BURGER_MUSICAL * get(totalPeopleNumberAtom) : 0,
)

const additionsPriceAtom = atom(
  (get) => get(restaurantPriceAtom) + get(planetariumPriceAtom) + get(musicalPriceAtom),
)

const totalPriceAtom = atom((get) => get(basePriceAtom) + get(additionsPriceAtom))

const finalPriceAtom = atom((get) =>
  get(familyPromotionAtom)
    ? get(totalPriceAtom) * FAMILY_PROMOTION_MULTIPLIER
    : get(totalPriceAtom),
)

export {
  restaurantPriceAtom,
  planetariumPriceAtom,
  musicalPriceAtom,
  finalPriceAtom,
  basePriceAtom,
}
