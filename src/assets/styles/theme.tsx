import {createTheme} from "@mui/material/styles";

export const COLORS = {
    primary: {
        main: '#6460a8',
        light: 'rgb(131, 127, 185)',
        dark: 'rgb(70, 67, 117)',
        contrastText: '#ffffff'
    },
    secondary: {
        main: '#ea5945',
        light: 'rgb(238, 122, 106)',
        dark: 'rgb(163, 62, 48)',
        contrastText: '#ffffff'
    },
    error: {
        main: '#d32f2f',
        light: '#e57373',
        dark: '#d32f2f',
        contrastText: '#fff'
    },
}

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: COLORS.primary.main,
            light: COLORS.primary.light,
            dark: COLORS.primary.dark,
            contrastText: COLORS.primary.contrastText
        },
        secondary: {
            main: COLORS.secondary.main,
            light: COLORS.secondary.light,
            dark: COLORS.secondary.dark,
            contrastText: COLORS.secondary.contrastText
        },
        error: {
            main: '#d32f2f',
            light: '#e57373',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        divider: 'rgba(0, 0, 0, 0.12)'
    },
});
