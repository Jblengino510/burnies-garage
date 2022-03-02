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
        setUser: (state, { payload }) => {
            state.entities = payload
            state.errors = []
            state.status = 'success'

        }
    },
    extraReducers: {
        [fetchLoggedInUser.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchLoggedInUser.fulfilled]: (state, { payload }) => {
            if (Object.keys(payload).includes('error')) {
                state.entities = false
                state.errors = payload.error
                state.status = 'error'
            } else {
                state.entities = payload
                state.errors = []
                state.status = 'success'
            }
        },
        [fetchLoggedInUser.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer