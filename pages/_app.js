import '@styles/globals.css'
import NavigationBar from "@components/NavigationBar";
import Footer from "@components/Footer";

export default function Application({ Component, pageProps }) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}
