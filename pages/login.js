import Head from "next/head";

import fetch from "isomorphic-unfetch";
import { login } from "../utils/auth";

export default function () {
  const handleSubmit = async (event) => {
    event.preventDefault();
    login({ token: "aswdw64564213416426ew214zdcxs34tfrae" });
  };
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit}>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
