import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (inicialData, url, update) => {
   const [data, setData] = useState(inicialData)

   useEffect(() => {
      axios.get(url, {
         headers: {
            auth: localStorage.getItem('token')
         }
      })
         .then((response) => { setData(response.data) })
         .catch((error) => { alert('Deu ruim: ', error.response) })
   }, [update])

   return data
}

export default useRequestData