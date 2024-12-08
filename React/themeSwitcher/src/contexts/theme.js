import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'dark', //default value
    darkMode: () => {},
    lightMode: () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

//custom Hook
export default function useTheme () {
    return useContext(ThemeContext)
}
