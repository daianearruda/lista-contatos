import styled from 'styled-components'

export const Form = styled.form`
  max-width: 100%;
  width: 80%;
  margin: 16px 0;
  text-align: center;
  font-weigth: bold;

  textarea {
    resize: none;
    margin: 16px 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    align-items: center;
  }
`
