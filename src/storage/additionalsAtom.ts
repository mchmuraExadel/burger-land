import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'

const restaurantAtom = atomWithReset(false)
const planetariumAtom = atomWithReset(false)
const musicalAtom = atomWithReset(false)

const isAnyAdditionalSelectedAtom = atom(
  (get) => get(restaurantAtom) || get(planetariumAtom) || get(musicalAtom),
)

export { restaurantAtom, planetariumAtom, musicalAtom, isAnyAdditionalSelectedAtom }
