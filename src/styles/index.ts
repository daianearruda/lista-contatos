import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import relogioImg from '../img/relogios.jpg'

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style:none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContaineir = styled.main`
  padding: 0 2em;
  height: 100vh;
  overflow-y: scroll;
  // background: linear-gradient(
  //     rgba(255, 255, 255, 0.3),
  //     rgba(255, 255, 255, 0.1)
  //   ),
  //   url(${relogioImg});
  background-image: url(${relogioImg});
  background-size: cover;
  background-position: center;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margim-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 5px 5px black;
`
export const Campo = styled.input`
  padding: 8px;
  margin: 3px 0;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
