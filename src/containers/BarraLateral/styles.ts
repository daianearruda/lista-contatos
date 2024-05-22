import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.roxoescuro2};
  height: 100vh;
  box-shadow: 10px 0 20px rgba(0, 0, 0, 0.9),
    /* Sombra principal para o efeito 3D */ 3px 0 50px rgba(0, 0, 0, 0.9); /* Sombra adicional para esfumar a borda direita */
  z-index: 1;
`

export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  align-items: center;
  text-align: center;
`

export const Button = styled.button`
  margin-top: 1em;
  cursor: pointer;
  padding: 2px;

  border: 5em;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  -webkit-transform: translate(0);
  transform: translate(0);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 1px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  color: white;
`
