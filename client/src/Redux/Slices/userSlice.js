import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchLoggedInUser = createAsyncThunk('user/fetchLoggedInUser', () => {
    return fetch('/me')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data
    })
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        entities: false,
        errors: [],
        status: 'idle'
    },
    reducers: {
        setUser: (state, action) => {
            state.entities = action.payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer