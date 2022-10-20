import React, { useState } from 'react';
import styled from '@emotion/styled';
import ShowSVG from '../svg/showSVG';
import HideSVG from '../svg/hideSVG';


const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  width: 100%;
  height: 100px;
  color: #f8f8f8;
  background-color: #242424;
  padding-bottom: 30px;
  
  & div > strong {
    font-size: 1.8rem;
    margin-right: 10%;
  }
  & button{
    border: none;
    outline: 0;
    background: transparent;
    color: #f8f8f8;
  }

`

type BalanceProps = {
  amount: number;
}

export default function Balance(props: BalanceProps) {
 const [show, setShow] = useState<boolean>(false);

  return (
    <BalanceContainer>
      <p>Saldo</p>
      <div>
        {show ?
        <strong>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.amount)}</strong>
        :
        <strong>R$ *******,**</strong>
}
      <button onClick={()=> setShow(!show)}>
        {show ? <HideSVG /> : <ShowSVG />}
      </button>
      </div>
    </BalanceContainer>
  )
}
