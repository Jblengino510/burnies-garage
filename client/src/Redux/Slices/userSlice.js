import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchLoggedInUser = createAsyncThunk('user/fetchLoggedInUser', () => {
    return fetch('/me')
    .then(res => res.json())
    .then(data => data)
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        entities: false,
        errors: [],
        status: 'idle'
    },
    reducers: {
        logIn: (state, action) => {
            state.entities = action.payload
        }
    }
})

export const { logIn } = userSlice.actions

export default userSlice.reducer