import "../styles/globals.css"
import Layout from "../components/patterns/Layout"

export default ({ Component, pageProps }) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}