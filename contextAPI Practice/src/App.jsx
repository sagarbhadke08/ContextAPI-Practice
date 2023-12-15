
import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login.jsx';
import Profile from './Components/Profile';
function App() {


  return (
    <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
