function Card() {
  return (
    <>
      <div className="w-[210px] h-[250px]  rounded-2xl bg-[#44C4CA] shadow-xl cursor-pointer dark:bg-[#10797E]">
        <figure className="w-[210px] h-[197px] relative">
          <img className="w-full h-full rounded-t-2xl object-cover" src="https://images.pexels.com/photos/21430836/pexels-photo-21430836/free-photo-of-blanco-y-negro-analogico-colgando-naturaleza-muerta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span className="absolute top-2 left-2 w-16 h-6 bg-[#D9D9D9] rounded-xl text-center text-xs leading-5">Clothes</span>
          <i id="eAdd" onClick={ () =>{
              const eAdd = document.querySelector('#eAdd');
              eAdd.classList.toggle('bxs-plus-circle')
            }
          } 
          className="bx bx-plus-circle bx-sm absolute  rounded-full top-2 right-2 transition-all hover:bg-black hover:text-white"></i>
        </figure>
        <div className="flex justify-between items-center h-[53px] px-2 text-[#1F2929] dark:text-[#F6F8F8]">
          <span>Generic Product</span>
          <span className="font-semibold">$369</span>
        </div>
      </div>
    </> 
  )
}

export default Card