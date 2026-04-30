import { useContext } from "react";
import Post from "../components/Post";
import UserProfile from "../components/UserProfile";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

export default function UserProfilePage() {
    const {userId} = useContext(UserContext)
    const user = useSelector(state => 
        state.users.users.find(u => u.id === userId) 
    )

    return (
        user ?
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col gap-6">
            <div>
                <UserProfile />
            </div>
            <div>
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                    Your Posts
                </h2>

                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
                    {
                        user.posts?.map((post) => (
                            <div className="break-inside-avoid" key={post.id}>
                                <Post post={post}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div> : <div>Loading..</div>
    )
}