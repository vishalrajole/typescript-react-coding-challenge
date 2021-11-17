import React from "react";
import { ThemeProvider } from "styled-components";
import App from "src/App";
import theme from "src/configs/theme";
import GlobalStyle from "./styles/global";
import ModalProvider from "./components/Modal/provider";

const Root: React.FC = () => (
    <ThemeProvider theme={theme}>
        <ModalProvider>
            <GlobalStyle />
            <App />
        </ModalProvider>
    </ThemeProvider>
);

export default Root;
