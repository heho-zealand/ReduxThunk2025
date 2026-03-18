import {createSlice, nanoid} from '@reduxjs/toolkit';
const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: [],
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        //Assumption: action.payload === {name: 'xx', cost: yy}
        addCar(state, action){
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id : nanoid() //generates a unique id for each car added
            });
        },
        //Assumption: action.payload === id of the car to be removed
        removeCar(state, action){
            state.data = state.data.filter((car) => {return car.id !== action.payload})
        }
    }
})
export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions; //action creators
export const carsReducer = carsSlice.reducer;  //combined reducers