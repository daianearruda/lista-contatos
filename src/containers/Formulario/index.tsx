import { BotaoSalvar, MainContaineir, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'

const Formulario = () => (
  <MainContaineir>
    <Titulo>Novo Contato</Titulo>
    <Form>
      <Campo type="text" placeholder="Nome" />
      <Campo type="email" placeholder="Email" />
      <Campo type="tel" placeholder="Telefone" />
      <Campo as="textarea" placeholder="Observações" />
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  </MainContaineir>
)

export default Formulario
