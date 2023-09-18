import UserContextProvider from './Context'
import { Input } from './Input'




function App({}) {
  
  return (

    <>
    
      <UserContextProvider>
        <Input/> 
      </UserContextProvider>
    </>
  )
}

export default App
