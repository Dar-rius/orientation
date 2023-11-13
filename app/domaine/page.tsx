import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import prisma from "@/prisma/prisma";
import styles from "@/styles/domaine.module.css"
import CompDomaine from "@/components/head";

async function getDiscussion(){
    try{
        const res = await prisma.discussion.findFirst()
        return res
    } catch (err){
        throw err
    }
}

async function getDomaine(){
    try{
        const res = await prisma.info_domaine.findMany()
        return res
    } catch (err){
        throw err
    }
}

export default async function Domaine(){
    const discu = await getDiscussion()
    const domaines = await getDomaine()
    return<main style={{
        background:"white",
        color:"black",
    }}>
        <Header/>
        <section style={{
            marginLeft:50,
            marginRight:50,
        }}>
            <CompDomaine/>
            <div style={{
                marginLeft:"20%",
                margin:"2%"
            }}>
                <p>{discu?.subject}</p>
                <p>{discu?.topic}</p>
            </div>

            <div className={styles.list}>
                {domaines?.map((item)=> (
                    <div key={item.id} className={styles.item}>
                        <h3>{item.nom}</h3>
                        <p>{item.resume}</p>
                        <Link href={`/domaine/${item.id}`}
                        style={{
                            padding:"4%",
                            border:"1px solid black",
                            borderRadius: 10,
                            paddingLeft:20,
                            paddingRight:20,
                        }}
                        >
                            Decouvrir
                        </Link>
                    </div>
                ))}
            </div>
        </section>
        <Footer/>
    </main>
}