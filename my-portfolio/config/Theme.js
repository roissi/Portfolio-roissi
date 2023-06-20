import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "88em", // 1400px
  },
  
  colors: {
    light: {
      primary: "#0e1a29",
      background: "#f9f4da"
    },
    dark: {
      primary: "#F9F4DA",
      background: "#0e1a29"
    }
  },
  fonts: {
    heading: "Paytone One, sans-serif",
    body: "Outfit, sans-serif"
  },
  components: {
    Input: {
      variants: {
        focusBorder: {
          field: {
            _focus: {
              borderColor: '#f55e0a',
            },
          },
        },
      },
    },
  },
})

export default theme;