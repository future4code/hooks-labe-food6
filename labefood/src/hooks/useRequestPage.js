import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (inicialData, url, update) => {
   const [data, setData] = useState(inicialData)
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      setIsLoading(true)
      axios.get(url, {
         headers: {
            auth: localStorage.getItem('token')
         }
      })
      .then((response) => { 
         setIsLoading(false)
         setData(response.data)
       })
         .catch((error) => {
            setIsLoading(false) 
            alert('Deu ruim: ', error.response)
            console.log('erro de requisição', error.response) 
         })
   }, [update])

   return [data, isLoading]
}

export default useRequestData