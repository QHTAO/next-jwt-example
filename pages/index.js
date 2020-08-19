import Head from "next/head";
import { auth } from "../utils/auth";
const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      home
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  // Check user's session
  const { token } = auth(ctx);
  return { token };
};
export default Home;
