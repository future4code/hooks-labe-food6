export const goToFeedPage = (navigate) => {
   navigate("/home")
}

export const goToLoginPage = (navigate) => {
   navigate("/login")
}

export const goTosignUpPage = (navigate) => {
   navigate("/cadastro")
}

export const goToAdressPage = (navigate) => {
   navigate("/endereco")
}

export const goToDetailsPage = (navigate, id) => {
   navigate(`/detalhes-restaurante/${id}`)
}

export const goToCartPage = (navigate) => {
   navigate("/carrinho")
}

export const goToProfilePage = (navigate) => {
   navigate("/perfil")
}


export const goToUpdateProfile = (navigate) => {
   navigate("/atualiza-perfil")
}

export const goBack = (navigate) => {
   navigate(-1)
}