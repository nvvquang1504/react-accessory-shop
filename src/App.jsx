import {useState} from 'react'
import {ThemeProvider} from "@mui/material/styles";
import {Routes, Route, Link} from 'react-router-dom'
import {theme} from './utils/material/theme'
import HomePage from './pages/home'
import AdminPage from './pages/admin'
function App() {
   const [count, setCount] = useState(0)
   
   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <Routes>
               <Route path={'/'} element={<HomePage/>}></Route>
               <Route path={'/admin'} element={<AdminPage/>}></Route>
            </Routes>
         </div>
      </ThemeProvider>
   )
}

export default App
