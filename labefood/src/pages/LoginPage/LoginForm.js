import React from 'react'
import useUnProtectedPage from "../../hooks/useUnprotectedPage"
import { InputsContainer } from "./styled";
import { InputLabel, OutlinedInput, TextField } from "@material-ui/core";
import { FormControl } from '@material-ui/core'
import { InputAdornment } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Visibility } from '@material-ui/icons'
// import { VisibilityOff } from '@material-ui/icons'
import { Button } from "@material-ui/core"

const LoginForm = () => {
   useUnProtectedPage()
   const onSubmitForm = event => {
      event.preventDefault()
   }
   return (
      <InputsContainer onSubmit={onSubmitForm}>
         <TextField
            label={'E-mail'}
            name={''}
            value={''}
            onChange={() => null}
            variant={'outlined'}
            InputLabelProps={{
               shrink: true,
            }}
            placeholder={'email@email.com'}
            fullWidth
            requised
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
               type='password'
               name={"password"}
               value={'email'}
               onChange={() => null}
               placeholder={"Mínimo 6 caracteres"}
               inputProps={{
                  pattern: "^.{6,}$",
                  title: "Senha deve possuir no mínimo 6 caracteres"
               }}
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => null}
                        onMouseDown={() => null}
                        edge="end"
                     >

                        <Visibility />

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
            Entrar
         </Button>
      </InputsContainer>
   )
}

export default LoginForm