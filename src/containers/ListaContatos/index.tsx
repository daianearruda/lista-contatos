import { useSelector } from 'react-redux'
import { MainContaineir, Titulo } from '../../styles'

import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContato = () => {
    let contatosFiltrados = itens

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.titulo.toLowerCase().includes(termo.toLowerCase()) ||
          item.telefone.includes(termo) ||
          item.email.toLowerCase().includes(termo.toLowerCase())
      )
    }

    return contatosFiltrados
  }

  const exibecontatos = filtraContato()

  return (
    <MainContaineir>
      <Titulo as="p">{exibecontatos.length} contatos cadastrados</Titulo>

      <ul>
        {exibecontatos.map((t) => (
          <li key={t.titulo}>
            <Contato
              descricao={t.descricao}
              telefone={t.telefone}
              titulo={t.titulo}
              email={t.email}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContaineir>
  )
}

export default ListaContatos
