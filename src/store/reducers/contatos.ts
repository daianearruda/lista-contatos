import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      titulo: '',
      tel: '',
      email: '',
      descricao: ''
    },
    {
      id: 2,
      titulo: '',
      tel: '',
      email: '',
      descricao: ''
    },
    {
      id: 3,
      titulo: '',
      tel: '',
      email: '',
      descricao: ''
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
