import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ titulo, tel, email, descricao, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
