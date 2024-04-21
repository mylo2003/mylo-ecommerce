import { createContext } from 'react'

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ chindren }) {
  return (
    <ShoppingCartContext.Provider>
      {chindren}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }