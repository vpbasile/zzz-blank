import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import sandboxTheme from './theming/themeSandbox.ts'
import Fonts from './theming/fontConfig.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Fonts />
    <ChakraProvider theme={sandboxTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
