import { useContext } from "react"
import UserContext from "../context/UserContext"
import { useDispatch, useSelector } from "react-redux"
import { toggleLikePost, toggleSavePost } from "../store/userSlice"

export default function Post({post}) {
    const {userId} = useContext(UserContext)
    const user = useSelector(state => 
        state.users.users.find(u => u.id === userId) 
    );

    const dispatch = useDispatch()
    const isLiked = user?.likedPosts?.includes(post.id)
    const isSaved = user?.savedPosts?.includes(post.id)

    return (
        <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition group">
            <img
                src={post.image}
                alt="post"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full bg-white/90 hover:bg-white transition"
                        onClick={() => dispatch(toggleLikePost({id: post.id, userId: user.id}))}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isLiked ? 'text-red-500' : 'text-gray-700'}`} fill={`${isLiked ? 'currentColor' : 'none'}`} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <button className="p-2 rounded-full bg-white/90 hover:bg-white transition"
                        onClick={() => dispatch(toggleSavePost({id: post.id, userId: user.id}))}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isSaved ? 'text-yellow-500' : 'text-gray-700'}`} fill={`${isSaved ? 'currentColor' : 'none'}`} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h14v14l-7-4-7 4V5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}