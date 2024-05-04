import { useContext } from "react"
import { ShoppingCartContext } from "../context/ProductContext";

function OrderCard({ id, price, image, title, visible }) {

  const { handleDelete } = useContext(ShoppingCartContext);

  return (
    <div id={id} className="flex items-center shadow rounded-lg h-[60px] w-full my-1 bg-gray-200 border-l border-b border-gray-400 dark:border-dark-accent dark:bg-dark">
      <figure className="h-[60px] w-1/6">
        <img className="h-full w-full object-cover rounded-lg" src={image} alt={title} />
      </figure>
      <div className="flex justify-between h-full w-5/6 px-2 items-center">
        <p className="w-64 mx-2 truncate">{title}</p>
        <p className="font-medium w-20">${price}</p>
        {
          visible == true ?
            <i onClick={() => handleDelete(id, price)} className='bx bx-cart-download bx-sm text-center w-7 cursor-pointer hover:text-red-600'></i>
          : ''
        }
      </div>
    </div>
  )
}

export default OrderCard