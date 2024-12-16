import React from 'react'
import { useItemsContext } from '../context/productsContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Items from '../pages/Items'
import ItemDetails from '../pages/ProductDetails'
import ProtectedRoute from './ProtectedRoute'
import UnAuthorized from '../pages/unauthorized'
import LoginPage from '../pages/login'

const RouterApp = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/Items' element={
                    <ProtectedRoute>
                        <Items />
                    </ProtectedRoute>
                } />

                <Route path='/unauthorized' element={<UnAuthorized/>}/>
                <Route path='/product/:id' element={<ItemDetails />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp
