import { useContext } from "react";
import { ShoppingCartContext } from "../context/ProductContext";

function ProductDetails() {

  const { isProductDetailOpen, closeProductDetail, productToShow, cartProducts,  addProductToCart } = useContext(ShoppingCartContext);

  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id).length > 0;

    if (isInCart) {
      return (
        <i className='bx bxs-check-circle bx-sm align-baseline'></i>
      );
    } else {
      return (
        <i onClick={(e) => {
          addProductToCart(e, productToShow)
        }} className='bx bx-cart-add bx-sm align-baseline transition-all hover:text-secondary cursor-pointer'></i>
      );
    }
  };

  return (
    <aside className={`${(isProductDetailOpen) ? 'bottom-0 md:bottom-10' : '-bottom-[80vh]'} z-50 w-[300px] md:w-[450px] lg:w-[450px] h-[55vh] md:h-[60vh] lg:h-[80vh] fixed transition-all right-10 rounded-t-xl px-10 py-6 shadow-2xl border border-b-0 border-primary bg-white dark:text-background dark:border-white dark:bg-[#29323b]`}>
      <div className="flex justify-between">
        <h2 className="text-text font-semibold text-lg dark:text-background">Details</h2>
        <button onClick={closeProductDetail}>
          <i className='bx bx-x-circle bx-sm transition-colors hover:text-red-500'></i>
        </button>
      </div>
      <div className="flex justify-center flex-col items-center">
        <figure className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-contain">
          <img className="w-full h-full rounded-xl" src={productToShow?.image} alt={productToShow?.title} />
        </figure>
        <div className="my-3 md:w-[350px] text-pretty *:text-xs *:md:text-base">
          <h3 className="text-xl font-bold pb-2 flex justify-between">
            <span>${productToShow?.price} - {productToShow?.category}</span>
            {
              renderIcon(productToShow.id)
            }
          </h3>
          <h4 className="w-full font-semibold pb-2">{productToShow?.title}</h4>
          <p className="w-full max-h-[150px] text-sm overflow-auto">{productToShow?.description}</p>
        </div>
      </div>
    </aside>
  );
}

export default ProductDetails;