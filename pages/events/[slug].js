import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const SingleEvent = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Layout>
      <h1>SingleEvent</h1>
      <p>{router.query.slug}</p>
      <button onClick={() => router.push("/")}>go to home</button>
    </Layout>
  );
};

export default SingleEvent;
