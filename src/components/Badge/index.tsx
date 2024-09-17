import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  label: string
}
export function Badge({ children, label }: Props) {
  return(
    <div className="flex items-center gap-x-3">
      <span className="flex justify-center items-center p-4 rounded-full bg-red-200 text-white">
        { children }
      </span>
      <span className="text-base leading-5"> { label } </span>
    </div>
  )
}