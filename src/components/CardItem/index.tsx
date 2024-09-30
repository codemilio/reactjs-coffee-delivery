import { AddItem } from "./AddItem";

type Props = {
  imgURL: string 
  itemName: string 
}

export function CardItem({ imgURL, itemName }: Props) {
  return(
    <div className="flex">
      <img src={imgURL} alt=""/>
      <h3>{itemName}</h3>
      <AddItem />
    </div>
  )
}