import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 01",
          amount: 400,
          type: "deposit",
          category: "Food",
        },
      ];
    });
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
