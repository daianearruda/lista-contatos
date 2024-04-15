import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar" />
    <S.Filtros>
      <div>
        <FiltroCard legenda="Cadastros na sua agenda" contador={1} />
        <S.Button>Gerar PDF</S.Button>
      </div>
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
