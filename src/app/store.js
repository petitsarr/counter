import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//Le store redux est crée grace à la fonction configureStore de redux toolkit..
/*
Lorsque nous appelons configureStore, nous pouvons passer tous les différents réduceurs dans un objet. 
Les noms de clé dans l'objet définiront les clés dans notre valeur d'état final.
*/
/*
Lorsque nous passons dans un objet comme {counter: counterReducer},
 cela indique que nous voulons avoir une section state.counter
  de notre objet d'état Redux,
  et que nous voulons que la fonction counterReducer soit chargée de décider 
  si et comment mettre à jour la section state.counter
 chaque fois qu'une action est envoyée.
*/
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
