
import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login.jsx';
import Profile from './Components/Profile';
function App() {


  return (
    <UserContextProvider>
      <h1>Hi I m SDE at Tesla</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
