import React from 'react'
import backIcon from '../../assets/back_arrow.svg'
import { useNavigate } from 'react-router-dom'
import { HeaderMainDiv } from './styled'
import { goToLastPage } from '../../routes/coordinator'

const Header = (props) => {
  const navigate = useNavigate();

  return (

    <HeaderMainDiv>
      {props.hideBackButton ? <span id='spacingLeft'></span> : <img alt='back icon' src={backIcon} onClick={() => goToLastPage(navigate)} />}
      <p>{props.title && props.title.length > 0 ? props.title : null}</p>
      <span id='spacingRight'></span>
    </HeaderMainDiv>


  )
}

export default Header