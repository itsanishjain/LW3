import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* pages -> about,contact */}
      <Component {...pageProps} />  
    </Layout>
  );
}

export default MyApp;
