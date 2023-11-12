"use client";
import { signIn } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Style from "@/styles/page.module.css"

export default function Home() {
  return <main  className={Style.main}>
      <Header/>
      <section style={{marginBottom:70}}>
        En Cours de developpement
        <button onClick={() => signIn()}>Sign in</button>
      </section>
      <Footer/>
 </main>;
}
