import { useSelector } from 'react-redux'

import { Container } from './styles'

import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContato = () => {
    return itens.filter((item) => {
      // Verifica se o termo está presente em qualquer um dos campos (título, telefone, email)
      return (
        item.titulo.toLowerCase().includes(termo.toLowerCase()) ||
        item.tel.includes(termo) ||
        item.email.toLowerCase().includes(termo.toLowerCase())
      )
    })
  }

  return (
    <Container>
      <p>{termo} contatos cadastrados</p>
      <ul>
        {filtraContato().map((t) => (
          <li key={t.titulo}>
            <Contato
              descricao={t.descricao}
              tel={t.tel}
              titulo={t.titulo}
              email={t.email}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaContatos
