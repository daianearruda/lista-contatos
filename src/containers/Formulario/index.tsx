import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContaineir, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispath = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [descricao, setDescricao] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispath(
      cadastrar({
        titulo,
        telefone,
        email,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <MainContaineir>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          type="email"
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Email"
        />
        <Campo
          type="tel"
          onChange={(evento) => setTelefone(evento.target.value)}
          placeholder="Telefone"
        />
        <Campo
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Observações"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContaineir>
  )
}

export default Formulario
