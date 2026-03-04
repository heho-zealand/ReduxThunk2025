import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",  //Bemærk dette er navnet på slicen ikke navnet på staten i storen!
  initialState: [],
  reducers: {
    addSong(state, action) {        //den actiontype der "aktivere" denne reducer er 'song/addSong' (name of slice + / + name of reducer)
      state.push(action.payload);
      console.log("addSong: " + "type: " + action.type + " payload: " + action.payload); //addSong: type: song/addSong payload: Andreas Odberg - I morgen er der også en dag
    },
    removeSong(state, action) {   //Bemærk 'state' er ikke den overordnede 'samlede state' (The big state object) men kun den del af staten der er associeret med denne reducer
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {                        //ikke nødvendigt her, da store kun har en slice, men skal flere slices nulstilles samtidigt benyttes extraReducers
    builder.addCase(reset, (state, action) => {   //reset er en ekstra reducer der tilføjes til slicen, reduceren nullstiller staten til et tomt array 
      return [];                                  //Be
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;  //Burde hedde actionCreators i stedet for actions!!!
export const songsReducer = songsSlice.reducer;

console.log("songsSlice.actions: ");
console.log(songsSlice.actions); //{addSong: ƒ, removeSong: ƒ} action creator functions
console.log("songsSlice.actions.addSong: ");
console.log(songsSlice.actions.addSong("Andreas Odberg - I morgen er der også en dag")); //{type: "song/addSong", payload: "Andreas Odberg - I morgen er der også en dag"}

//Bemærk en slice definere initial state og kombinere minireducere (addSong, removeSong og reset) til en stor reducer (songsReducer) og definere en række 'action creator' funktioner
//Disse 'action creator' funktioner genereres af createSlice funktionen, og er tilgængelige via songsSlice.actions objektet
//Så 'addSong er således en 'reducer' i songSlice og kan tilgås via en eksporterede funktion 'addSong' fra songsSlice.actions objektet. Den eksporterede 
//funktion 'addSong' er en 'action creator' funktion, der returnere en action med type og payload.