import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"
import { Footer } from "../../components/Footer/Footer"

const FeedPage = () => {
   useProtectdPage()
   return (
      <div>
         <h1>Home cards inicial</h1>
         <Footer page='home' />
      </div>
   )
}

export default FeedPage