import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppProps } from "next/app";

interface ChildrenProps {
  children: any;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <>
    <Head>
      <title>zkNews App</title>
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
