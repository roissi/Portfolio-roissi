import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    light: {
      primary: "#1A202C",
      background: "#f9f4da"
    },
    dark: {
      primary: "#F9F4DA",
      background: "#1A202C"
    }
  },
  fonts: {
    heading: "Paytone One, sans-serif",
    body: "Outfit, sans-serif"
  },
})

export default theme;