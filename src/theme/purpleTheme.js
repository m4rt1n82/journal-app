import { red } from "@mui/material/colors";
import { createTheme } from "@mui/system";

export const purpleTheme = createTheme({

    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main : '#543884'
        },
        error: {
            main: red.A400
        }
    }

}
);