import Post from "../components/Post";

export default function PostsPage() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
                <div className="break-inside-avoid">
                    <Post/>
                </div>

                <div className="break-inside-avoid">
                    <Post/>
                </div>

                <div className="break-inside-avoid">
                    <Post/>
                </div>

                <div className="break-inside-avoid">
                    <Post/>
                </div>
            </div>
        </div>
    )
}