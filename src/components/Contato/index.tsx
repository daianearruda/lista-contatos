import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  titulo,
  tel,
  email,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setdescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setdescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setdescricao(descricaoOriginal)
  }
  return (
    <S.Card>
      <S.Titulo> {titulo}</S.Titulo>
      <S.Input value={tel} type="text" placeholder=" Telefone" />
      <S.Input value={email} type="text" placeholder=" Email" />
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setdescricao(evento.target.value)}
        placeholder=" Observações"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    tel,
                    email,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao
              onClick={() => {
                console.log('meu id é: ', id)
                setEstaEditando(true)
              }}
            >
              Editar
            </S.Botao>
            <S.BotaoCancelar
              onClick={() => {
                console.log('ID do contato a ser removido:', id)
                dispatch(remover(id))
              }}
            >
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
