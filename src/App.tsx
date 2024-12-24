import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/themes/theme"
import { GlobalStyles } from "./styles/GlobalStyles"
import { AppRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext"


function App() {
 
  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles/>
          <AppRoutes/>
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
