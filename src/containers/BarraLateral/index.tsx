import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <S.Campo
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
      />
      <S.Filtros>
        <div>
          <FiltroCard legenda="Cadastros na sua agenda" contador={1} />
          <S.Button>Gerar PDF</S.Button>
        </div>
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
