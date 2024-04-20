class Contato {
  titulo: string
  tel: string
  email: string
  descricao: string
  id: number

  constructor(
    titulo: string,
    tel: string,
    email: string,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.tel = tel
    this.email = email
    this.descricao = descricao
    this.id = id
  }
}
