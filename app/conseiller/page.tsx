import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Profile from "@/public/conseiller/User.svg";
import Image from "next/image";
import prisma from "@/prisma/prisma";
import Phone from "@/public/footer/phone.svg";
import Background from "@/public/accueil/background.png";

async function getData() {
  try {
    let res = await prisma.conseiller.findMany();
    return res;
  } catch (err) {
    console.error(err);
  }
}

export default async function Conseiller() {
  const data = await getData();
  return (
    <main style={{ backgroundImage: `url(${Background.src})`, color: "black" }}>
      <Header />
      <section style={{ marginRight: 50, marginLeft: 50 }}>
        <h1
          style={{
            fontSize: 26,
            fontWeight: "bolder",
          }}
        >
          Contactez nos conseillers
        </h1>
        {data?.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              borderRadius: 29,
              display: "flex",
              alignItems: "center",
              padding: "0% 20px",
              marginRight: 150,
              marginTop: 25,
              marginBottom: 25,
              paddingTop: "1%",
              paddingBottom: "1%",
              background: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "20%",
                borderRight: "1px solid black",
                padding: "0% 20px",
                height: 50,
              }}
            >
              <Image src={Profile} alt="Profile" style={{ marginRight: 10 }} />
              <div>
                <p style={{ fontWeight: "bold" }}>
                  {item.nom} {item.prenom}
                </p>
                <p style={{ color: "#9C9C9C" }}>{item.genre}</p>
              </div>
            </div>

            <div
              style={{
                width: "23%",
                marginLeft: "5%",
                borderRight: "1px solid black",
                height: 50,
              }}
            >
              <p>
                Email: <span style={{ color: "#9C9C9C" }}>{item.email}</span>
              </p>
              <p>
                Telephone:{" "}
                <span style={{ color: "#9C9C9C" }}>{item.telephone}</span>
              </p>
            </div>
            <div
              style={{
                width: "40%",
                marginLeft: "3%",
              }}
            >
              <p style={{ lineHeight: 1 }}>{item.description}</p>
            </div>
            <div
              style={{
                background: "#FFE3EE",
                display: "flex",
                justifyContent: "center",
                border: "1px solid black",
                padding: "15px 14.05px 15px 14.705px",
                borderRadius: 17,
                marginLeft: 20,
              }}
            >
              <Image src={Phone} alt="phone" width={30} height={30} />
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
