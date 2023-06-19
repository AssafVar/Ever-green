"use client";

import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="EverGreen" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Navbar/>
      <main className="mt-4">{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home page</Link>
        </div>
      )}
    </div>
  );
}
