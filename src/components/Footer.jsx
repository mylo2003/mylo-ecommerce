function Footer() {
  return (
    <footer className='w-full backdrop-blur-md bg-background/70 dark:bg-dark/90 h-10 mt-10 md:fixed bottom-0'>
      <div className='w-full h-full flex justify-center items-center transition-all dark:text-white '>
        <a href='https://github.com/mylo2003/mylo-ecommerce' target='_blank'>
          <span className='pr-2'>Made by Camilo</span>
          <i className='bx bxl-github bx-sm align-middle hover:text-secondary'></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;