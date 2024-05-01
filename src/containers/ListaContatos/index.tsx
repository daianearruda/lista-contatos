import { useSelector } from 'react-redux'

import { Container } from './styles'

import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio } = useSelector((state: RootReducer) => state.filtro)

  const filtraContato = () => {
    let contatosFiltrados = itens // Inicialmente, contatosFiltrados contém todos os itens

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.titulo.toLowerCase().includes(termo.toLowerCase()) ||
          item.tel.includes(termo) ||
          item.email.toLowerCase().includes(termo.toLowerCase())
      )
    }

    return contatosFiltrados
  }

  return (
    <Container>
      <p>{termo} contatos cadastrados</p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
      </ul>
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
