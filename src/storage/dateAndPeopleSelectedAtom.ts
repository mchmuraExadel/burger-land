import { atom } from 'jotai'
import { dateAtom } from '@/storage/dateAtom.ts'
import { totalPeopleNumberAtom } from '@/storage/peopleAtom.ts'

const dateAndPeopleSelectedAtom = atom<boolean>((get) => {
  const isDateSelected = !!get(dateAtom)
  const arePeopleSelected = get(totalPeopleNumberAtom) > 0
  return isDateSelected && arePeopleSelected
})

export { dateAndPeopleSelectedAtom }
