import React, { useState } from "react"
import useProtectdPage from "../../hooks/useProtectedPage"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { DivAdress, FormAdress } from "./styled"
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { goToLoginPage } from "../../routes/coodinator"
import Header from "../../components/Header/Header"
import { CircularProgress } from "@material-ui/core"
import { UseAuth } from "../../hooks/useAuth"


function AdressPage() {

   useProtectdPage()
   const navigate = useNavigate()
   const auth = UseAuth()
   const { form, onChange, clear } = useForm({
      street: "",
      number: "",
      neighbourhood: "",
      city: "",
      state: "",
      complement: ""
   })
   const [isLoading, setIsLoading] = useState(false)

   const onSubmitAddAdress = (event) => {
      event.preventDefault()
      const body = {
         street: form.street,
         number: form.number,
         neighbourhood: form.neighbourhood,
         city: form.city,
         state: form.state,
         complement: form.complement

      }
      setIsLoading(true)
      axios.put(`${BASE_URL}/address`, body, auth)
         .then((res) => {
            alert("Cadastrado com sucesso")
            goToLoginPage(navigate)
            setIsLoading(false)
            clear()
         })
         .catch((err) => {
            alert("Deu ruin Bergue, confere o console ae!!")
            setIsLoading(false)
            alert(err.response.message)
         })

   }


   return (
      <>
         <Header />

         <DivAdress>

            <p> Meu endereço </p>

            <FormAdress onSubmit={onSubmitAddAdress}>
               <TextField variant="outlined"
                  label="Logradouro"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  placeholder="Rua / Av."
                  name="street"
                  value={form.street}
                  onChange={onChange}
                  required
                  fullWidth
               />

               <TextField variant="outlined"
                  label="Número"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  placeholder="Número"
                  type="number"
                  name="number"
                  value={form.number}
                  onChange={onChange}
                  required
                  fullWidth
               />

               <TextField variant="outlined"
                  label="Complemento"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  placeholder="Apto. / Bloco"
                  name="complement"
                  value={form.complement}
                  onChange={onChange}
                  fullWidth
               />

               <TextField variant="outlined"
                  label="Bairro"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  placeholder="Bairro"
                  name="neighbourhood"
                  value={form.neighbourhood}
                  onChange={onChange}
                  required
                  fullWidth
               />

               <TextField variant="outlined"
                  label="Cidade"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  placeholder="Cidade"
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  required
                  fullWidth
               />

               <TextField variant="outlined"
                  label="Estado"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  placeholder="Estado"
                  name="state"
                  value={form.state}
                  onChange={onChange}
                  required
                  fullWidth
               />

               <Button type="submit" variant="contained" color="primary" fullWidth>
                  {isLoading ? <CircularProgress color={"inherit"} size={26} /> : "Salvar"}
               </Button>
            </FormAdress>
         </DivAdress>
      </>
   )
}

export default AdressPage