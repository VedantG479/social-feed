import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Header'
import PostsPage from './pages/PostsPage'
import UserProfilePage from './pages/UserProfilePage'
import { useContext, useEffect, useState } from 'react'
import UserContext from './context/UserContext'
import { useSelector } from 'react-redux'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {
  const { userId, setUserId } = useContext(UserContext)
  const [themeMode, setThemeMode] = useState('light')
  const toggleTheme = () => setThemeMode((prev) => prev === 'light' ? 'dark' : 'light')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(themeMode)
  }, [themeMode])

  const users = useSelector(state => state.users.users)

  useEffect(() => {
    setUserId(users[0].id)
  }, [])

  return (
    <>
      <ThemeContextProvider value={{themeMode, toggleTheme}}>
      <Header />
      <Routes>
        <Route index element={<PostsPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
      </Routes>
      </ThemeContextProvider>
    </>
  )
}

export default App