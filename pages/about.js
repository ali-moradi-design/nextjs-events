import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About events app">
      <h1>About</h1>
      <p>This is about page</p>
      <p>Version: 1.0.0</p>
      <Link href="/">go to home</Link>
    </Layout>
  );
};

export default AboutPage;
