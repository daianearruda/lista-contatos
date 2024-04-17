import Contato from '../../components/Contato'
import { Container } from './styles'

const ListaContatos = () => (
  <Container>
    <p>10 contatos cadastrados</p>
    <ul>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaContatos
