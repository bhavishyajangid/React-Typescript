import { createSlice } from "@reduxjs/toolkit";


const initialState : stateType = {
     loading : false,
     result : [],
     error : '',
     words : []
}

const slice = createSlice({
    name : 'root',
    initialState,
    reducers : {

    }
})

export const {} = slice.actions

export default slice.reducer