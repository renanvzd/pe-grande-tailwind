import React, { useEffect } from "react";
import Head from "next/head";
import { Header } from "@/components/Layouts/header";
import { Footer } from "./footer";


const Layout: React.FC<{
  children: React.ReactNode;
  title: string;
  description: string;
  content: string;
}> = ({ children, title, description, content }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={description} content={content} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between mt-20">
        <Header />
        <main className="flex flex-col items-center md:bg-primary-background">
          {children}
        </main>
        <footer className="z-10">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export { Layout };
