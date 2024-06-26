import { useContext } from "react";
import { LoadStatusContext } from "../context/LoadStatus";

function InputSearch() {

  const { setSearchedItem } = useContext(LoadStatusContext);

  return (
    <>
      <h1 id='title' className='px-2 md:px-0 text-2xl md:text-3xl lg:text-4xl text-center mb-7 text-text dark:text-background'>Everything you need in one place...</h1>
      <input
        className='w-[270px] h-[43px] transition-all focus:outline-none focus:w-[280px] text-center rounded-2xl shadow-xl bg-secondary border  placeholder:text-text/50 dark:bg-[#125356] dark:placeholder:text-gray-300/50 dark:text-gray-300 dark:border-white/50'
        type='text'
        placeholder='What are you looking for?'
        onChange={(event) => setSearchedItem(event.target.value)}
        onBlur={(event) => event.target.value = ''}
        onFocus={() => setSearchedItem('')}
        />
    </>
  );
}

export default InputSearch;