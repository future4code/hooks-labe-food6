import React, { useState } from 'react'
import useUnProtectedPage from "../../hooks/useUnprotectedPage"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { BASE_URL } from '../../constants/urls'
import { goToFeedPage } from '../../routes/coodinator'
import { InputsContainer } from "./styled"
import { InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { FormControl } from '@material-ui/core'
import { InputAdornment } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'
import { VisibilityOff } from '@material-ui/icons'
import { Button } from "@material-ui/core"
// import Loading from '../../assets/myLoading.svg'
import { CircularProgress } from "@material-ui/core"

const LoginForm = () => {

   useUnProtectedPage()
   const navigate = useNavigate()
   const { form, onChange, clear } = useForm({ email: "", password: "" })
   const [isLoading, setIsLoading] = useState(false)
   const [values, setValues] = useState({ showPassword: false })

   const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
   }

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   }

   const onSubmitForm = event => {
      event.preventDefault()
      login()
   }

   const login = () => {
      setIsLoading(true)
      axios.post(`${BASE_URL}/login`, form)
         .then((response) => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('tokenandess', response.data.token)
            setIsLoading(false)
            goToFeedPage(navigate)
            clear()
         })
   }


   return (
      <InputsContainer onSubmit={onSubmitForm}>
         <TextField
            label={'E-mail'}
            name={'email'}
            value={form.email}
            onChange={onChange}
            variant={'outlined'}
            InputLabelProps={{
               shrink: true,
            }}
            placeholder={'email@email.com'}
            type={'email'}
            fullWidth
            required
         />

         <FormControl
            variant="outlined"
            required
            fullWidth
         >
            <InputLabel
               shrink
               htmlFor="outlined-adornment-password"
            >
               Senha
            </InputLabel>
            <OutlinedInput
               id="outlined-adornment-password"
               type={values.showPassword ? 'text' : 'password'}
               name={"password"}
               value={form.password}
               onChange={onChange}
               placeholder={"Mínimo 6 caracteres"}
               inputProps={{
                  pattern: "^.{6,}$",
                  title: "Senha deve possuir no mínimo 6 caracteres"
               }}
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                     >
                        {values.showPassword ?
                           <Visibility />
                           :
                           <VisibilityOff />
                        }

                     </IconButton>
                  </InputAdornment>
               }
               notched
               labelWidth={59}
            />
         </FormControl>

         <Button
            type={"submit"}
            variant={"contained"}
            color={"primary"}
            fullWidth
         >
            {isLoading ? <CircularProgress color={"inherit"} size={26} /> : "Entrar"}
         </Button>
      </InputsContainer>
   )
}

export default LoginForm