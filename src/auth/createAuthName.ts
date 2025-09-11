import yeast from 'yeast'

export default function createAuthName (): string {
  return yeast()
    .split('')
    .reverse()
    .join('')
    .replaceAll('_', '')
}
