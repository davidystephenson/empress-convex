import { useState, type JSX } from 'react'
import { IconButtonClinkRobe } from 'clink-robe'
import { FaCheck, FaLink } from 'react-icons/fa'

export default function CopyGame (): JSX.Element {
  const [copied, setCopied] = useState(false)
  async function copy (): Promise<void> {
    void navigator.clipboard.writeText(window.location.href)
    setCopied(true)
  }
  const icon = copied ? <FaCheck /> : <FaLink />
  return (
    <IconButtonClinkRobe
      button={{
        'aria-label': 'Copy game link',
        icon,
        onClick: copy,
        variant: 'ghost'
      }}
    />
  )
}
