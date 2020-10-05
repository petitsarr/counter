import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {

      // Redux Toolkit nous permet d'écrire une logique "mutante" dans les réducteurs. Il
      // ne modifie pas réellement l'état car il utilise la bibliothèque immer,
      // qui détecte les changements dans un "état brouillon" et produit un tout nouveau
      // état immuable basé sur ces changements

      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

/*
console.log(counterSlice.actions.increment())
//affiche {type: "counter/increment"}
*/

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// La fonction ci-dessous s'appelle un thunk et nous permet d'exécuter une logique asynchrone.
// Il peut être distribué comme une action ordinaire: `dispatch (incrementAsync (10))`.
// Ceci appellera le thunk avec la fonction `dispatch` comme premier argument.
// Le code async peut alors être exécuté et d'autres actions peuvent être distribuées
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// La fonction ci-dessous s'appelle un sélecteur et nous permet de sélectionner une valeur parmi
// l'état. Les sélecteurs peuvent également être définis en ligne là où ils sont utilisés au lieu de
// dans le fichier de tranche. Par exemple: `useSelector ((state) => state.counter.value)`....
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
