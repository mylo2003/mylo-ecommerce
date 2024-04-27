function ErrorMessage() {
  return (
    <div className="my-10 flex flex-col items-center dark:text-white">
      <i className='bx bx-error-circle bx-lg mt-12 text-red-400'></i>
      <p className="mt-6 text-2xl">Whoops... the server is having <span className="text-red-400">troubles.</span></p>
      <p className="text-2xl">Please refresh the page or try again later.</p>
    </div>
  ) 
}

export default ErrorMessage