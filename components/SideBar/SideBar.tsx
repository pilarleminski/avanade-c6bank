import React from 'react';
import styled from '@emotion/styled';
import Profile from '../Profile';
import Balance from '../Balance';
import Menu from '../Menu';

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`

export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile name="Pilar" role="Full Stack Developer" agency="0001" accountNumber="123456" />
      <Balance amount={1000000} />
      <Menu />
    </SideBarContainer>
  )
}
