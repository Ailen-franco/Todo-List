import Footer from "./components/Footer"
import Header from "./components/Header"
import { Box } from "@chakra-ui/react";
import TaskManager from "./components/TaskManager";



function App() {
  
  return (
    <>
    <Box bgColor='gray.800' >
      <Header />
      <TaskManager />
      <Footer />
    </Box> 
    </>
  )
}

export default App
