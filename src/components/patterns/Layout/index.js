import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";

export default ({ children }) => {
    return <>
        <Head>
            <link rel="shortcut icon" href="/icons/favicon.ico"></link>
            <title>Pokedex For Fans</title>
        </Head>
        <Navbar/>
        <main className="main-container">{children}</main>
        <Footer/>
    </>
}