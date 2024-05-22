import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  border: 5em;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 0.25s ease;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 9.9);
  background-image: linear-gradient(
    45deg,
    ${variaveis.amarelo2},
    ${variaveis.roxoclaro}
  );
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);

  &:hover {
    transform: scale(1.1);
  }
`
