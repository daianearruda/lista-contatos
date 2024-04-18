import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  tel: string
  email: string
  descricao: string
}

const Contato = ({ titulo, tel, email, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo> {titulo}</S.Titulo>
      <S.Input value={tel} type="text" placeholder=" Telefone" />
      <S.Input value={email} type="text" placeholder=" Email" />
      <S.Descricao value={descricao} placeholder=" Observações" />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
