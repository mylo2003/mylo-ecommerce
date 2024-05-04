import { useContext } from "react";
import { ShoppingCartContext } from "../context/ProductContext";

function Card({ id, title, image, category, price, description }) {

  const { setProductToShow, openProductDetail, addProductToCart, cartProducts, closeCheckout, openCheckout } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    closeCheckout();
    openProductDetail();
    setProductToShow(productDetail);
  };

  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0;

    if (isInCart) {
      return (
        <i onClick={openCheckout} className='bx bxs-check-circle bx-sm absolute top-2 right-2 text-primary'></i>
      );
    } else {
      return (
        <i onClick={(e) => {
          addProductToCart(e, { id, title, image, category, price, description })
        }}
        className='eAdd bx bx-plus-circle bx-sm absolute top-2 right-2 text-secondary'></i>
      );
    }
  };

  return (
    <>
      <div onClick={() => showProduct({ id, title, image, category, price, description })} className='w-[210px] h-[250px] rounded-2xl bg-secondary shadow-xl cursor-pointer dark:bg-primary'>
        <figure id={id} className='w-[210px] h-[197px] rounded-t-2xl relative overflow-hidden'>
          <img className='w-full h-full rounded-t-2xl transition-all ease-in-out object-cover hover:scale-105' src={image} alt={title} />
          <span className='absolute px-1 truncate top-2 left-2 w-20 h-6 bg-[#D9D9D9] rounded-xl text-center text-xs leading-5'>{category}</span>
          {
            renderIcon(id)
          }
        </figure>
        <div className='flex justify-between items-center h-[53px] px-2 text-text dark:text-background'>
          <span className='truncate pr-4 font-normal'>{title}</span>
          <span className='font-medium'>${price}</span>
        </div>
      </div>
    </>
  );
}

export default Card;