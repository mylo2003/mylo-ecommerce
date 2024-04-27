import { useContext } from "react"
import { ShoppingCartContext } from "../context/ProductContext"

function Card({ id, title, image, category, price, description }) {

  const { setProductToShow, openProductDetail, addProductToCart, } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  }

  return (
    <>
      <div onClick={() => showProduct({ id, title, image, category, price, description })} className='w-[210px] h-[250px] rounded-2xl bg-[#44C4CA] shadow-xl cursor-pointer dark:bg-[#10797E]'>
        <figure id={id} className='w-[210px] h-[197px] relative overflow-hidden'>
          <img className='w-full h-full rounded-t-2xl transition-all ease-in-out object-cover hover:scale-105' src={image} alt={title} />
          <span className='absolute px-1 truncate top-2 left-2 w-16 h-6 bg-[#D9D9D9] rounded-xl text-center text-xs leading-5'>{category}</span>
          <i onClick={(e) => {
            addProductToCart(e, { id, title, image, category, price, description })
          }}
            className='eAdd bx bx-plus-circle bx-sm absolute top-2 right-2 rounded-full text-[#35989d] transition-all'></i>
        </figure>
        <div className='flex justify-between items-center h-[53px] px-2 text-[#1F2929] dark:text-[#F6F8F8]'>
          <span className='truncate pr-4'>{title}</span>
          <span className='font-semibold'>${price}</span>
        </div>
      </div>
    </>
  )
}

export default Card