import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '../../Button'

export function AddItem() {
  const [itensNumber, setNumberItens] = useState(0)

  const handleAdd = () => {
    setNumberItens((prev) => prev + 1)
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
