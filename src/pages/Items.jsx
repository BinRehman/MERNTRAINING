import React, { useEffect } from 'react'
import { useItemsContext } from '../context/productsContext'
import { getItems } from '../services/productServices'
import ItemCard from '../components/ProductCard'

const Items = () => {


    const { allProducts, setProductsHandle } = useItemsContext()



    useEffect(() => {
        !(async () => {
            const data = await getItems()
            setProductsHandle(data)
        })()

    }, [])

    return (
       <div className='container mx-auto'>
         <div className='grid grid-cols-5 gap-4'>
            {allProducts.map((Item) => <ItemCard key={Item.id} data={Item} />)}
        </div>
       </div>
    )
}

export default Items
