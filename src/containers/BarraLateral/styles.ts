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
