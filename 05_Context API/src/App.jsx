import './App.css'
import LoginForm from './components/Login'
import Chatbot from './components/Chatbot'
import { useContext } from 'react';
import { UserProvider } from './context/UserContext';

function App() {

  const { userInfo } = useContext(UserProvider)
  console.log(userInfo)

  if (!userInfo) {
    return (<LoginForm />)
  }
  return (
    <>
      <Chatbot />
    </>
  )
}

export default App
