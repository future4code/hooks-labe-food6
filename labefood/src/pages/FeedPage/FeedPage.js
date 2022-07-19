import React from 'react'
import useProtectdPage from "../../hooks/useProtectedPage"

const FeedPage = () => {
   useProtectdPage()
   return (
      <div>
         Home cards inicial
      </div>
   )
}

export default FeedPage