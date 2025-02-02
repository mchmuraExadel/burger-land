import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'

const adultsAtom = atomWithReset<number>(0)

const kidsAtom = atomWithReset<number>(0)

const familyPromotionAtom = atom<boolean>((get) => get(adultsAtom) >= 2 && get(kidsAtom) >= 3)

const totalPeopleNumberAtom = atom((get) => get(adultsAtom) + get(kidsAtom))

export { adultsAtom, kidsAtom, familyPromotionAtom, totalPeopleNumberAtom }
