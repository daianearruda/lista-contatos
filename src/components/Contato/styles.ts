import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px black;
  padding: 16px;
  width: 50%;
  margin-top: 2em;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0em 1em;
  height: 30px;
  border-radius: 10px;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #8b8b8b;
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
