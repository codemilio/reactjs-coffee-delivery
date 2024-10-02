import type { ComponentProps, ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'span'> & {
  children: ReactNode
  label: string
}

export function Badge({ children, label, className = '' }: Props) {
  return(
    <div className="flex items-center gap-x-3">
      <span className={twMerge("flex justify-center items-center p-4 rounded-full bg-red-200 text-white", className)}>
        { children }
      </span>
      <span className="text-base leading-5"> { label } </span>
    </div>
  )
}