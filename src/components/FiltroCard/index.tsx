import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  criterio: 'nome' | 'telefone' | 'email'
}

const FiltroCard = ({ contador, legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio
      })
    )
  }
  return (
    <S.Card onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
