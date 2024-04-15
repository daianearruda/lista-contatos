import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Titulo>Nome do Contato</S.Titulo>
    <S.Input type="text" placeholder="Telefone" />
    <S.Input type="text" placeholder="Email" />
    <S.Descricao></S.Descricao>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
