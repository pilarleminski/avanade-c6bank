import React from 'react';
import styled from '@emotion/styled';
import ExtractHeader from '../ExtractHeader';
import ExtractData from '../ExtractData';
import ExtractTotal from '../ExtractTotal';
import db from '../utils/db';

const ExtractContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 450px);
  position: absolute;
  right: 0;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export default function ExtractContent() {
  return (
    <ExtractContentContainer>
      <ExtractHeader />
      <ExtractTotal />
      <ExtractData db={db}/>
      <ExtractTotal />
    </ExtractContentContainer>
  )
}
