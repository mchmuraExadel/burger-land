import { atom } from 'jotai'

const adultsAtom = atom<number>(0)

const kidsAtom = atom<number>(0)

const familyPromotionAtom = atom<boolean>((get) => get(adultsAtom) >= 2 && get(kidsAtom) >= 3)

const totalPeopleNumberAtom = atom((get) => get(adultsAtom) + get(kidsAtom))

export { adultsAtom, kidsAtom, familyPromotionAtom, totalPeopleNumberAtom }
