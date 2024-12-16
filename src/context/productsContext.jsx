import { createContext, useContext, useState } from "react";

export const ItemsContext = createContext()

export const useItemsContext = () => useContext(ItemsContext)


export const ProductsProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([])

    const setProductsHandle = (data) => {
        setAllProducts(data)
    }

    return <ItemsContext.Provider value={{allProducts, setProductsHandle}} >
        {children}
    </ItemsContext.Provider>
}