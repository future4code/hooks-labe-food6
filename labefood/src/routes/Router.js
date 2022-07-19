import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OpeningPage from '../pages/OpeningPage/OpeningPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import AdressPage from '../pages/AdressPage/AdressPage'
import RestaurantDetailsPage from '../pages/RestaurantDetailsPage/RestaurantDetailsPage'
import CartPage from "../pages/CartPage/CartPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<OpeningPage />} />
            <Route path='/home' element={<FeedPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadastro' element={<SignUpPage />} />
            <Route path='/endereco' element={<AdressPage />} />
            <Route path='/detalhes-restaurante/:restaurantId' element={<RestaurantDetailsPage />} />
            <Route path='/carrinho' element={<CartPage />} />
            <Route path='/perfil' element={<ProfilePage />} />
            <Route path='/atualiza-perfil' element={<UpdateProfile />} />
            <Route path='*' element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router