export default function Upload() {
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
                        className="text-sm text-gray-700 dark:text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-400 file:text-black file:font-medium hover:file:bg-yellow-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                        Caption
                    </label>
                    <textarea
                        rows="3"
                        placeholder="Write something..."
                        className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    ></textarea>
                </div>

                <div className="flex items-center justify-end gap-3 mt-2">
                    <button className="px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        Cancel
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-sm transition active:scale-95">
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}