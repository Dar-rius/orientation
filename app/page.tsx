"use client";
import { signIn } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Style from "@/styles/page.module.css";
import Image from "next/image";
import first from "@/public/accueil/first.svg";
import two from "@/public/accueil/two.svg";
import sept from "@/public/accueil/7.svg";
import test from "@/public/accueil/test.svg";
import six from "@/public/accueil/6.svg";
import Link from "next/link";
import { StylesProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={Style.main}>
      <Header />
      <section style={{ marginBottom: 70, marginTop: 200 }}>
        <div className={Style.first}>
          <p>Beneficiez</p>
          <Image src={first} alt="test " width={250} />
          <p> de conseils</p> <br />
          <p> de professionnels et d’experts</p>
        </div>

        <p
          style={{
            textAlign: "center",
            paddingLeft: "30%",
            paddingRight: "30%",
            fontSize: 19,
          }}
        >
          {" "}
          Découvrez comment nous pouvons vous guider vers un parcours éducatif
          qui vous correspond vraiment.
        </p>
        <div className={Style.two}>
          <Link
            href={""}
            style={{
              border: "1px solid black",
              padding: 10,
              borderRadius: 28,
              background: "#AEDEFC",
            }}
          >
            En savoir plus
          </Link>

          <Image
            src={two}
            alt="test "
            width={150}
            height={200}
            style={{
              position: "relative",
              left: "50%",
            }}
          />
        </div>

        <div className={Style.test}>
          <Image src={test} alt=" " width={500} height={400} />
          <div
            style={{
              width: "40%",
            }}
          >
            <div className={Style.boff}>
              <p className={Style.merde}>Qui sommes nous</p>
              <Image src={six} alt=" " width={150} height={200} />
            </div>
            <p className={Style.text}>
              Notre plateforme est le fruit de l'engagement d'une équipe
              passionnée et dévouée. Nous sommes une équipe engagée composée
              d'experts en éducation, de passionnés de l'orientation et de
              professionnels déterminés à vous guider vers un avenir éducatif
              épanouissant. Notre équipe est animée par la conviction que chaque
              élève a le potentiel de réussir, et nous mettons en œuvre notre
              expertise pour vous offrir des ressources de qualité, des conseils
              avisés et une expérience d'apprentissage inoubliable.
            </p>
          </div>
        </div>

        <div className={Style.sept}>
          <div className={Style.text1}>
            <p
              style={{
                color: "#24ABFF",
                fontSize: 30,
                marginBottom: "5%",
              }}
            >
              La communauté
            </p>
            <p>
              La commu est l'endroit où les étudiants se réunissent pour créer
              des liens, partager des connaissances et s'inspirer mutuellement.
              C'est ici que vous trouverez des camarades de classe, des mentors
              potentiels et des amis pour votre parcours académique. Explorez
              notre communauté pour élargir vos horizons, poser des questions,
              partager vos expériences et évoluer ensemble.
            </p>
            <Link
              href={""}
              style={{
                border: "1px solid black",
                padding: 10,
                borderRadius: 28,
                background: "#AEDEFC",
              }}
            >
              Decouvrez la communauté
            </Link>
          </div>

          <Image src={sept} alt="test " width={500} height={300} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
