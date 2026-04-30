import { useContext } from "react"
import UserContext from '../context/UserContext'

export default function UserProfile() {
    const {user} = useContext(UserContext)

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                    <img
                        src={user.profile}
                        alt="user"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {user.name}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span><span className="font-medium text-gray-800 dark:text-white">{user.likesReceived}</span> Likes</span>
                        <span><span className="font-medium text-gray-800 dark:text-white">{user.savesReceived}</span> Saves</span>
                    </div>
                </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-medium transition active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Create
            </button>
        </div>
    )
}