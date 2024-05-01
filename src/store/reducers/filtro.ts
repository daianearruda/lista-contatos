// filtroSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltroState {
  termo?: string
  criterio: 'nome' | 'telefone' | 'email'
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'nome'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
    }
  }
})

export const { alteraTermo, alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
