import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/postsSlice";
import { createPost } from "../store/userSlice";
import UserContext from "../context/UserContext";

export default function Upload({setShowUpload}) {
    const dispath = useDispatch()
    const {userId} = useContext(UserContext)
    const user = useSelector(state => 
        state.users.users.find(u => u.id === userId) 
    )

    const [file, setFile] = useState(null)
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleUpload = async (file) => {
        if (!file) return;
        const base64 = await convertToBase64(file);
        const id = crypto.randomUUID()

        const newPost = {
            id,
            image: base64,
            postedBy: userId
        }
        dispath(addPost(newPost))
        dispath(createPost({userId, file: {id, image: base64}}))
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-5">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Upload Post
                </h2>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                        Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="text-sm text-gray-700 dark:text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-400 file:text-black file:font-medium hover:file:bg-yellow-500"
                        onChange={(e) => {
                            const file = e.target.files[0]
                            setFile(file)
                        }}
                    />
                </div>

                <div className="flex items-center justify-end gap-3 mt-2">
                    <button className="px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        onClick={() => {
                            setShowUpload(false)
                            setFile(null)
                        }}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm transition active:scale-95"
                        onClick={() => {
                            handleUpload(file)
                            setShowUpload(false)
                            setFile(null)
                        }}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}