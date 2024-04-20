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
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar>Remover</S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
