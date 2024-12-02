import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            gray100: string;
            gray200: string;
            gray300: string;
            gray400: string;
            gray500: string;
            error: string;
            success: string;
        }
        typography: {
            h1: string;
            h2: string;
            h3: string;
            body: string;
            small: string;
        }
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        }
        breakpoints: {
            mobile: string;
            tablet: string;
            desktop: string;
        }
    }
}