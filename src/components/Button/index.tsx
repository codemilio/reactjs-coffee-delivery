import type { ComponentProps,  ReactNode } from "react"

type Props = ComponentProps<'button'> & {
  children: ReactNode
}

export function Button({ children, ...props }: Props) {
  
  return (
    <button type="button"  className="rounded-lg bg-gray-100 p-2" {...props}>
      { children }
    </button>
  )
}
