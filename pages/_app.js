/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

function MyApp({
  Component,
  pageProps,
  session,
  title = "Welcome to freshbox",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
