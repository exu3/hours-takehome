import "../styles/globals.scss";
import { useState } from "react";
import { UserContext } from "../lib/UserContext";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState(null);
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
