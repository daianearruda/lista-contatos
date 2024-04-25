import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ContatoClass from '../../models/Contato'

type ContatosState = {
  itens: ContatoClass[]
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
