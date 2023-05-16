import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/configAxios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const initialState = {
    products: [],
    isShowCart: false,

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        changeIsShowCart: (state) => {
            state.isShowCart = !state.isShowCart
        },
        setProducts: ( state, action) => {
            const newProducts = action.payload
            state.products = newProducts
        },
    },

})
export const { changeIsShowCart , setProducts } = cartSlice.actions

export const getCartProduct = () => (dispatch) => {
    axiosEcommerce.get("cart", getConfig())
    .then( (res) => dispatch(setProducts(res.data)))
    .catch( (err) => console.log(err))
}
export const addProductCart = (data) => (dispatch) => {
    axiosEcommerce.post("cart", data , getConfig())
    .then( () => {
        dispatch( getCartProduct() ) 
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'product add'
          })
    })
    .catch( (err) => {
        console.log(err)
        const added = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          added.fire({
            icon: 'error',
            title: `${ err.response.data == "Forbidden"? "you have to be log in" : err.response.data.error }`
          })

    })
}

export const deleteProductCart = (id) => (dispatch) => {
    axiosEcommerce.delete(`cart/${id}`, getConfig())
    .then( () => {
        dispatch( getCartProduct() ) 
    })
    .catch( (err) => console.log(err))
}

export const purchaseCart = () => (dispatch) => {
    axiosEcommerce.post( "purchases" ,{}, getConfig())
    .then( () => {
        dispatch( getCartProduct() ) 
        const purchase = Swal.mixin({
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
          })
          purchase.fire({
            icon: 'success',
            title: 'Successful purchase'
          })

    })
    .catch( (err) => console.log(err))
}

export const updateCartProduct = (id, quantity) => (dispatch) => {
    axiosEcommerce.put(`cart/${id}`, quantity , getConfig())
    .then( () => dispatch( getCartProduct() ) )
    .catch( (err) => console.log(err))
}

export default cartSlice.reducer