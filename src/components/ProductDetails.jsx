import { useContext } from "react";
import { ShoppingCartContext } from "../context/GlobalContext";

function ProductDetails() {

  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext);

  // console.log('Product to show: ', productToShow);

  return (
    <aside className={`w-[450px] h-[80vh] ${(isProductDetailOpen) ? 'bottom-10' : '-bottom-[80vh]'} fixed transition-all right-10  rounded-t-xl px-10 py-6 shadow-2xl border border-b-0 border-primary bg-white`}>
      <div className="flex justify-between">
        <h2 className="text-text font-semibold text-lg">Details</h2>
        <button onClick={closeProductDetail}>
          <i className='bx bx-x-circle bx-sm hover:text-secondary'></i>
        </button>
      </div>
      <div className="flex justify-center flex-col items-center">
        <figure className="w-[250px] h-[250px] object-contain">
          <img className="w-full h-full rounded-xl" src={productToShow?.image} alt={productToShow?.title} />
        </figure>
        <div className="my-3 w-[350px] text-pretty">
          <h3 className="text-xl font-bold pb-2"><span>${productToShow?.price} - {productToShow?.category}</span></h3>
          <h4 className="w-full font-semibold pb-2">{productToShow?.title}</h4>
          <p className="w-full max-h-[150px] text-sm overflow-auto">{productToShow?.description}</p>

        </div>
      </div>
    </aside>
  )
}

export default ProductDetails