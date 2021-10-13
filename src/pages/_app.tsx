import "../styles/globals.scss";
import "nprogress/nprogress.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { ThemeProvider } from "@material-ui/core";
import { createTheme, StylesProvider } from "@material-ui/core/styles";
import NProgress from "nprogress";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/queryClient";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const theme = createTheme({
    palette: {
        text: {
            primary: "#FFFFFF",
        },
        primary: {
            main: "#ff3f3f",
            light: "#e94d3d",
            contrastText: "#fff",
        },
        secondary: {
            main: "#3f69ff",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: "Open Sans",
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>TTS</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
                />
            </Head>


            <QueryClientProvider client={queryClient}>
                <StylesProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </StylesProvider>
            </QueryClientProvider>
        </>
    );
}
