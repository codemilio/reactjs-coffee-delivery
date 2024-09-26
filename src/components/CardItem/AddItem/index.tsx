import { Minus, Plus } from '@phosphor-icons/react'
import { Button } from '../../Button'

export function AddItem() {

  const handleAdd = () => {
    
  }
  
  const handleSub = () => {

  }
  
  return (
    <div>
      <Button> 
        <Plus />
      </Button>
      <input type="number" name="" id="" />
      <Button>
        <Minus />
      </Button>
    </div>
  )
}
