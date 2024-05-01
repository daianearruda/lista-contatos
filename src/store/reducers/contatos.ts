import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ContatoClass from '../../models/Contato'

type ContatosState = {
  itens: ContatoClass[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      titulo: 'Daiane',
      telefone: '48999524478',
      email: 'example@example.com',
      descricao: 'teste'
    },
    {
      id: 2,
      titulo: 'Helcio',
      telefone: '46464',
      email: 'example@example.com',
      descricao: ''
    },
    {
      id: 3,
      titulo: 'Raissa',
      telefone: '454798965',
      email: 'example@example.com',
      descricao: 'teste'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
