import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: '3r5w3hb9esf3s3s',
            name: 'Vedant',
            profile: '/profile.jpeg',
            likesReceived: 34, 
            savesReceived: 21,
            posts: [
                {
                    id: 'sg3q5236t363w64', 
                    image: '/post1.jpeg'
                },
                {
                    id: '325236t54gt4ee6436', 
                    image: '/post2.jpeg'
                }
            ],
            likedPosts: [], 
            savedPosts: [] 
        }
    ]
};

const userSlice = createSlice({
    name: 'users', 
    initialState, 
    reducers: {
        createPost: (state, action) => {
            const { userId, file } = action.payload;
            const user = state.users.find(u => u.id === userId);
            if(user)    user.posts.push(file);
        },
        toggleLikePost: (state, action) => {
            const { userId, id: postId } = action.payload;
            const user = state.users.find(u => u.id === userId);
            
            if(user){
                const index = user.likedPosts.indexOf(postId);
                if(index !== -1)   user.likedPosts.splice(index, 1);
                else    user.likedPosts.push(postId);
            }
        },
        toggleSavePost: (state, action) => {
            const { userId, id: postId } = action.payload;
            const user = state.users.find(u => u.id === userId);

            if(user){
                const index = user.savedPosts.indexOf(postId);
                if (index !== -1)   user.savedPosts.splice(index, 1);
                else    user.savedPosts.push(postId);
            }
        }
    }
});

export const { createPost, toggleLikePost, toggleSavePost } = userSlice.actions;
export default userSlice.reducer;
