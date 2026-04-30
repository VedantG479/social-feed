import { NavLink } from "react-router";
import useTheme from "./context/ThemeContext";

export default function Header() {
    const { themeMode, toggleTheme } = useTheme()

    return (
        <header className="w-full bg-white dark:bg-gray-900 shadow-sm px-6 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
                SnapFeed
            </h1>
            <div className="flex items-center gap-6">
                <NavLink className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                    to='/'
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "black",
                        fontWeight: isActive ? "bold" : "normal"
                    })}>
                    Home
                </NavLink>
                <NavLink className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                    to='/profile'
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "black",
                        fontWeight: isActive ? "bold" : "normal"
                    })}>
                    Profile
                </NavLink>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                onClick={toggleTheme}>
                {
                    themeMode === 'light' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-10h1M3.34 12h1m12.02 6.02l.7.7M6.34 6.34l.7.7m12.02-12.02l-.7.7M6.34 17.66l-.7.7M12 7a5 5 0 100 10 5 5 0 000-10z" />
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.64 13.64A9 9 0 1110.36 2.36 7 7 0 0021.64 13.64z" />
                    </svg>
                }
            </button>
        </header>
    )
}