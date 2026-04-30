import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Header'
import PostsPage from './pages/PostsPage'
import UserProfilePage from './pages/UserProfilePage'
import { useContext, useEffect } from 'react'
import UserContext from './context/UserContext'
import { useSelector } from 'react-redux'

function App() {
  const { user, setUser } = useContext(UserContext)
  const users = useSelector(state => state.users.users)

  useEffect(() => {
    setUser(users[0])
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<PostsPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
      </Routes>
    </>
  )
}

export default App