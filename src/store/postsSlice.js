import { createSlice } from "@reduxjs/toolkit"

const initialState = {allPosts: []}

const postsSlice = createSlice({
    name: 'posts',
    initialState, 
    reducers: {
        addPost: (state, action) => {
            const postToAdd = action.payload
            state.allPosts.push(postToAdd)
        },
        toggleLikePost: (state, action) => {
            const postToToggle = action.payload.id
            state.allPosts = state.allPosts.map((post) => {
                if(post.id == postToToggle)   return {
                    ...post, 
                    like: !post.like
                }
                return post
            })
        },
        toggleSavePost: (state, action) => {
            const postToToggle = action.payload.id
            state.allPosts = state.allPosts.map((post) => {
                if(post.id == postToToggle)   return {
                    ...post, 
                    saved: !post.saved
                }
                return post
            })
        }
    }
})

export const {addPost, toggleLikePost, toggleSavePost} = postsSlice.actions
export default postsSlice.reducer