import { axiosInstance } from '../axoisInstance'

export const getItems = async () => {

   const resData = await axiosInstance.get('/products')
   const data = resData.data
   return data


}

export const getProductById = async (id) => {

   const resData = await axiosInstance.get(`/products/${id}`)
   const data = resData.data

   return data


}