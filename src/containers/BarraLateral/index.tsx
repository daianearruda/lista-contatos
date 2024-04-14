import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar" />
    <S.Filtros>
      <div>
        <FiltroCard />
      </div>
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
