import { useSelector } from "react-redux";
import Post from "../components/Post";

export default function PostsPage() {
    const posts = useSelector(state => state.posts.allPosts)

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
                {
                    posts.map((post) => (
                        <div className="break-inside-avoid" key={post.id}>
                            <Post post={post}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}