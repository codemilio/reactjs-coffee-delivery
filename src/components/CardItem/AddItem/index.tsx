import { Minus, Plus } from '@phosphor-icons/react'

export function AddItem() {

  const handleAdd = () => {
    
  }
  
  const handleSub = () => {

  }
  
  return (
    <div>
      <button type="button" className="rounded-lg bg-gray-100"> 
        <Plus />
      </button>
      <input type="number" name="" id="" />
      <button type="button"  className="rounded-lg bg-gray-100">
        <Minus />
      </button>
    </div>
  )
}
