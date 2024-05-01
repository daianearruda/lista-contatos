class ContatoClass {
  titulo: string
  telefone: string
  email: string
  descricao: string
  id: number

  constructor(
    titulo: string,
    telefone: string,
    email: string,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.telefone = telefone
    this.email = email
    this.descricao = descricao
    this.id = id
  }
}
export default ContatoClass
