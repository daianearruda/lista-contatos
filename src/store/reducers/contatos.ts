import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ContatoClass from '../../models/Contato'
import { alteraFiltro } from './filtro'

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
    },
    cadastrar: (state, action: PayloadAction<Omit<ContatoClass, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
