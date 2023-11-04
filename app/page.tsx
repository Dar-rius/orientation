"use client";
import { signIn } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <sessionProvider>
      <main>
        En Cours de developpement
        <button onClick={() => signIn()}>Sign in</button>
      </main>
    </sessionProvider>
  );
}
