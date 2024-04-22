import { useSelector } from 'react-redux'

import { Container } from './styles'

import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <p>10 contatos cadastrados</p>
      <ul>
        {itens.map((t) => (
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
