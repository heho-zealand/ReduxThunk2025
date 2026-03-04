import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    sange: songsReducer,  //Bemærk 'sange' bliver navnet på staten i storen, det er ikke slice-navnet!
  }                       //Reduceren songsReducer er reduceren fra slicen songsSlice og de kan ændre staten 'sange'
});                       //Når storen konfigureres vil staten 'sange' blive initialiseret med værdien af initialState propertien fra songsSlice

export { store, reset, addSong, removeSong};


//Keys dvs navne på staten i storen dannes ud fra reducerens navn, så hvis reduceren hedder songs, så vil staten i storen hedde songs

const startingState = store.getState();
console.log("starting state:", startingState);  // {sange: Array(0)}
console.log(JSON.stringify(startingState)); // {"sange":[]}

store.dispatch({ type: "song/addSong", payload: "Andreas Odberg - I morgen er der også en dag" });
//store.dispatch(songSlice.actions.addSong("Andreas Odberg - I morgen er der også en dag")); 
const finalState = store.getState();
console.log(JSON.stringify(finalState)); // {"sange":["Andreas Odberg - I morgen er der også en dag"]}


