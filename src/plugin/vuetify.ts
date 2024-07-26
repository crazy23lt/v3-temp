import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

const cusDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {},
  variables: {
    'hover-opacity': 1,
    'border-color': 'red'
  }
}
const cusLightTheme: ThemeDefinition = {
  dark: false
}
export default createVuetify({
  icons: { defaultSet: 'fa', aliases, sets: { fa } },
  theme: { defaultTheme: 'cusDarkTheme', themes: { cusDarkTheme, cusLightTheme } }
})
