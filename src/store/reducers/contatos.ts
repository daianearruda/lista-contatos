import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Daiane Arruda', '489556565', 'daiane@daiane.com', '', 1),
    new Contato('Kat', '489556565', 'daiane@daiane.com', '', 2),
    new Contato('Helcio', '486555565', 'daiane@daiane.com', '', 3),
    new Contato('Maria', '4864456565', 'daiane@daiane.com', '', 4)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
