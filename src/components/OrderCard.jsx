import { useContext } from "react"
import { ShoppingCartContext } from "../context/ProductContext";

function OrderCard({ id, price, image, title }) {

  const { handleDelete } = useContext(ShoppingCartContext);

  return (
    <div id={id} className="flex items-center h-[60px] w-full my-1 border-b border-gray-400">
      <figure className="h-[60px] w-[70px]">
        <img className="h-full w-full object-cover rounded-lg" src={image} alt={title} />
      </figure>
      <div className="flex justify-between h-full w-[75%] items-center">
        <p className="mx-2 truncate">{title}</p>
        <p className="font-semibold">${price}</p>
      </div>
      <i onClick={() => handleDelete(id, price)} className='bx bx-x bx-sm cursor-pointer hover:text-red-600'></i>
    </div>
  )
}

export default OrderCard