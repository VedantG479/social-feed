import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [
        {
            id: '3r5w3hb9esf3s3s',
            name: 'Vedant',
            profile: '/profile.jpeg',
            likesReceived: 34, 
            savesReceived: 21,
            posts: []
        }
    ]
}

const userSlice = createSlice({
    name: 'users', 
    initialState, 
    reducers: {
        createPost: (state, action) => {
            const userId = action.payload.userId
            const post = action.payload.file

            state.users = state.users.map((user) => {
                if(user.id == userId)   return {
                    ...user, 
                    posts: [...user.posts, post]
                }
                return user
            })
        }
    }
})

export const {createPost} = userSlice.actions
export default userSlice.reducer