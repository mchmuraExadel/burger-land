import { atom } from 'jotai'

const restaurantAtom = atom(false)
const planetariumAtom = atom(false)
const musicalAtom = atom(false)

const isAnyAdditionalSelectedAtom = atom(
  (get) => get(restaurantAtom) || get(planetariumAtom) || get(musicalAtom),
)

export { restaurantAtom, planetariumAtom, musicalAtom, isAnyAdditionalSelectedAtom }
