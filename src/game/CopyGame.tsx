import { useState } from "react"
import { IconButtonClinkRobe } from "clink-robe"
import { FaCheck, FaLink } from "react-icons/fa";

export default function CopyGame() {
  const [copied, setCopied] = useState(false)
  function handleCopy() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
  }
  const icon = copied ? <FaCheck /> : <FaLink />
  return (
    <IconButtonClinkRobe
      button={{
        'aria-label': "Copy game link",
        icon,
        onClick: handleCopy,
        variant: 'ghost'
      }}
    />
  )
}