import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

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
`

type BalanceProps = {
  amount: number;
}

export default function Balance(props: BalanceProps) {
  return (
    <BalanceContainer>
      <p>Saldo</p>
      <div>
        <strong>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.amount)}</strong>
        <Link href="#">
          <a>
            MOSTRAR
          </a>
        </Link>
      </div>
    </BalanceContainer>
  )
}
