import { atom } from 'jotai'

const adultsAtom = atom<number>(1)
const kidsAtom = atom<number>(1)
const familyPromotionAtom = atom<boolean>((get) => get(adultsAtom) >= 2 && get(kidsAtom) >= 3)

export { adultsAtom, kidsAtom, familyPromotionAtom }
