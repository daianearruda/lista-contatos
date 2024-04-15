import styled from 'styled-components'

import { Props } from '.'

type omitProps = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<omitProps>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff ' : '#a1a1a1 ')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 10px;
  background-color: #fcfcfc;
  width: 100%;
`

export const Contador = styled.div`
  font-weight: bold;
  display: block;
  font-size: 24px;
`

export const Label = styled.div`
  font-size: 14px;
`
