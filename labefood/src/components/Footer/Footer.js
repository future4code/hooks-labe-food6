import React from 'react'
import avatarW from '../../assets/footerImg/avatar-w.png'
import avatar from '../../assets/footerImg/avatar.png'
import homePageW from '../../assets/footerImg/homepage-w.png'
import homePage from '../../assets/footerImg/homepage.png'
import shoppingCartW from '../../assets/footerImg/shopping-cart-w.png'
import shoppingCart from '../../assets/footerImg/shopping-cart.png'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { goToCartPage, goToFeedPage, goToProfilePage } from '../../routes/coodinator'
import { ContainerFooter } from "./styled"

export const Footer = (props) => {
   const navigate = useNavigate()
   return (
      <ContainerFooter>
         <IconButton title={"Página principal"} onClick={() => goToFeedPage(navigate)} aria-label="home">
            <img src={props.page === 'home' ? homePage : homePageW} alt={'Imagem de uma casa, represwentando a página principal'} />
         </IconButton>

         <IconButton title={"Carrinho"} onClick={() => goToCartPage(navigate)} aria-label="cart">
            <img src={props.page === 'cart' ? shoppingCart : shoppingCartW} alt={'Imagem de um carrinho de compras'} />
         </IconButton>

         <IconButton title={"Perfil"} onClick={() => goToProfilePage(navigate)} aria-label="profile">
            <img src={props.page === 'profile' ? avatar : avatarW} alt={'Imagem ilustrativa representando o perfil'} />
         </IconButton>
      </ContainerFooter>
   )
}