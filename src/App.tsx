import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/themes/theme"
import { GlobalStyles } from "./styles/GlobalStyles"
import { AppRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"


function App() {
 
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
         <GlobalStyles/>
         <AppRoutes/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
