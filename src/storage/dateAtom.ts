import { atomWithReset } from 'jotai/utils'

const dateAtom = atomWithReset(new Date())

export { dateAtom }
