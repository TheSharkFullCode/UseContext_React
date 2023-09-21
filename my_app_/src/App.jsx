import UserContextProvider from './Context'
import { Input } from './Input'
import  Referencias  from './Referencias'




function App({}) {
  
  return (

    <>
    
      <UserContextProvider>

        <Input/> 

      </UserContextProvider>


      <Referencias> </Referencias>
    </>
  )
}

export default App
