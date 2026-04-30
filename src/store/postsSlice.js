import { createSlice } from "@reduxjs/toolkit"

const initialState = {allPosts: [
    {
        id: 'sg3q5236t363w64', 
        image: '/post1.jpeg', 
        postedBy: '3r5w3hb9esf3s3s'
    }, 
    {
        id: '325236t54gt4ee6436', 
        image: '/post2.jpeg', 
        postedBy: '3r5w3hb9esf3s3s'
    }
]}

const postsSlice = createSlice({
    name: 'posts',
    initialState, 
    reducers: {
        addPost: (state, action) => {
            const postToAdd = action.payload
            state.allPosts.push(postToAdd)
        }
    }
})

export const {addPost} = postsSlice.actions
export default postsSlice.reducer