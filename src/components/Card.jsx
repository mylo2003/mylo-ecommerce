function Card({id, title, image, category, price}) {
  return (
    <>
      <div id={id} className='w-[210px] h-[250px]  rounded-2xl bg-[#44C4CA] shadow-xl cursor-pointer dark:bg-[#10797E]'>
        <figure className='w-[210px] h-[197px] relative'>
          <img className='w-full h-full rounded-t-2xl object-cover' src={image} alt={title} />
          <span className='absolute px-1 truncate top-2 left-2 w-16 h-6 bg-[#D9D9D9] rounded-xl text-center text-xs leading-5'>{category}</span>
          <i id='eAdd' onClick={ () =>{
              const eAdd = document.querySelector('#eAdd');
              eAdd.classList.toggle('bxs-plus-circle')
            }
          } 
          className='bx bx-plus-circle bx-sm absolute  rounded-full top-2 right-2 transition-all hover:bg-black hover:text-white'></i>
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