"use client";
import { signIn } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import Style from "@/styles/page.module.css"

export default function Home() {
  return <main  className={Style.main}>
      <Header/>
      <section>
        En Cours de developpement
        <button onClick={() => signIn()}>Sign in</button>
      </section>
 </main>;
}
