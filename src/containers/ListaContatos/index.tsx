import Contato from '../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    titulo: 'Daiane Arruda',
    tel: '4899524478',
    email: 'daiane@gmail.com',
    descricao: 'teste'
  },
  {
    titulo: 'Helcio souza',
    tel: '4899524478',
    email: 'daiane@gmail.com',
    descricao: 'teste'
  },
  {
    titulo: 'Alice matos',
    tel: '4899524478',
    email: 'daiane@gmail.com',
    descricao: 'teste'
  }
]

const ListaContatos = () => (
  <Container>
    <p>10 contatos cadastrados</p>
    <ul>
      {contatos.map((t) => (
        <li key={t.titulo}>
          <Contato
            descricao={t.descricao}
            tel={t.tel}
            titulo={t.titulo}
            email={t.email}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaContatos
