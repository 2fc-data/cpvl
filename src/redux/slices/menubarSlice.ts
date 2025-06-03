import { createSlice } from '@reduxjs/toolkit';

interface MenubarState {
  isMenubarOpen: boolean;
}

const initialState: MenubarState = {
  isMenubarOpen: false,
};

const menubarSlice = createSlice({
  name: 'menubar',
  initialState,
  reducers: {
    setMenubarOpen: (state) => {
      state.isMenubarOpen = true;
    },
    setMenubarClose: (state) => {
      state.isMenubarOpen = false;
    },
    // Adicionando um reducer de toggle para simplificar
    toggleMenubar: (state) => {
      state.isMenubarOpen = !state.isMenubarOpen;
    },
  },
});

// Exportando a nova ação toggleMenubar também
export const { setMenubarClose, setMenubarOpen, toggleMenubar } = menubarSlice.actions;

// Seletor para acessar o estado isMenubarOpen (assumindo que seu estado root tenha uma chave 'menubar')
// Exemplo: export const selectIsMenubarOpen = (state: RootState) => state.menubar.isMenubarOpen;
// Você precisará definir RootState baseado na sua configuração do store Redux

export default menubarSlice.reducer;
