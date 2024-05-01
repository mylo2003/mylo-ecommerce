function InputSearch() {
  return (
    <>
      <h1 className='text-4xl mb-7 text-text dark:text-background'>Everything you need in one place...</h1>
      <input className='w-[270px] h-[43px] transition-all focus:outline-none focus:w-[280px] text-center rounded-2xl shadow-xl bg-secondary border  placeholder:text-text/50 dark:bg-[#125356] dark:placeholder:text-gray-300/50 dark:text-gray-300 dark:border-white/50' type='' placeholder='What are you looking for?' />
    </>
  )
}

export default InputSearch