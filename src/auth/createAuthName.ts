import yeast from 'yeast'

export default function createAuthName () {
  return yeast()
    .split('')
    .reverse()
    .join('')
    .replaceAll('_', '')
}
