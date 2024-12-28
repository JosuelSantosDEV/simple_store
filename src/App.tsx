import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/themes/theme"
import { GlobalStyles } from "./styles/GlobalStyles"
import { AppRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { Provider } from "react-redux"
import store from "./store"


function App() {
 
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CartProvider>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles/>
            <AppRoutes/>
          </ThemeProvider>
        </CartProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
