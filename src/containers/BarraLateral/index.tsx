import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  // Filtra os contatos com base no termo de busca
  const contatosFiltrados = itens.filter(
    (item) =>
      item.titulo.toLowerCase().includes(termo?.toLowerCase() || '') ||
      item.telefone.includes(termo || '') ||
      item.email.toLowerCase().includes(termo?.toLowerCase() || '')
  )

  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <div>
                <FiltroCard
                  criterio="nome"
                  legenda="Contatos na sua agenda"
                  contador={contatosFiltrados.length}
                />
                <S.Button>Gerar PDF</S.Button>
              </div>
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
