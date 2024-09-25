import type { ReactNode } from "react"

type Props  = {
  children: ReactNode
}

export function Button({ children }: Props) {
  
  return (
    <button type="button"  className="rounded-lg bg-gray-100">
      { children }
    </button>
  )
}
