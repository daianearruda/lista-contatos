import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { BotaoSalvar } from '../../styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  titulo: tituloContato,
  telefone: numeroContato,
  email: emailContato,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState(descricaoOriginal)
  const [titulo, setTitulo] = useState(tituloContato)
  const [telefone, setTel] = useState(numeroContato)
  const [email, setEmail] = useState(emailContato)

  useEffect(() => {
    if (!estaEditando) {
      // Atualizar os estados apenas quando não estiver editando
      setTitulo(tituloContato)
      setTel(numeroContato)
      setEmail(emailContato)
      setDescricao(descricaoOriginal)
    }
  }, [
    descricaoOriginal,
    tituloContato,
    numeroContato,
    emailContato,
    estaEditando
  ])

  function cancelarEdicao() {
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando ? (
          <S.Input
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
          />
        ) : (
          titulo
        )}
      </S.Titulo>
      <S.Input
        value={telefone}
        onChange={(evento) => setTel(evento.target.value)}
        type="text"
        placeholder="Telefone"
        disabled={!estaEditando}
      />
      <S.Input
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="text"
        placeholder="Email"
        disabled={!estaEditando}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        placeholder="Observações"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    telefone,
                    email,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao
              onClick={() => {
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
