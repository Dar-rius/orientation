import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CompDomaine from "@/components/head";
import prisma from "@/prisma/prisma";
import style from "@/styles/info.module.css"

async function getDomaine({id}:{id:number}){
    try{
        const _id = id
        const res = await prisma.info_domaine.findUnique({
            where:{
                id:_id
            }
        })
        return res
    } catch (err){
        throw err
    }
}

async function getEcole(){
    try{
        const res = await prisma.info_ecole.findMany()
        return res
    } catch (err){
        throw err
    }
}

async function getMetier(){
    try{
        const res = await prisma.info_metier.findMany()
        return res
    } catch (err){
        throw err
    }
}

export default async function Domaine({params}:{params:{id:string}}){
    const id = Number(params.id)
    const domaine = await getDomaine({id})
    const ecoles = await getEcole()
    const metier = await getMetier()

    return<main style={{
            background:"white",
            color:"black"}}>
        <Header/>
        <section>
            <CompDomaine/>
            <div className={style.infos}>
                <div style={{
                    marginBottom:50
                }}>
                    <h1 style={{
                        marginBottom:20
                    }}>
                        {domaine?.nom}
                    </h1>
                    <p>{domaine?.description}</p>
                </div>
                <div>
                    <h1 style={{
                        marginBottom:20
                    }}>Debouches</h1>
                    <div style={{
                        marginBottom:50
                    }}>
                        {metier?.map((item) => (
                            <div key={item.id}
                            style={{
                                border:"1px solid black",
                                borderRadius: 29,
                                display:"flex",
                                alignItems:"center",
                                padding:"4% 20px",
                                marginTop:50,
                                marginBottom:50,
                                background:"#F3F0FF"
                            }}>
                                <div style={{
                                    display:"flex",
                                    alignItems:"center",
                                    width:"15%",
                                    borderRight:"1px solid black"
                                }}>
                                    {item.nom}
                                </div >
                                <p style={{
                                    marginLeft:"5%",
                                }}>{item.resume}</p>
                            </div>
                        ))}
                    </div>

                    <h1 style={{
                        marginBottom:20
                    }}>Universites et institus</h1>
                    <div style={{
                        marginBottom:50
                    }}>
                        {ecoles?.map((item) => (
                            <div key={item.id}
                                 style={{
                                     border:"1px solid black",
                                     borderRadius: 29,
                                     display:"flex",
                                     alignItems:"center",
                                     padding:"4% 20px",
                                     marginTop:50,
                                     marginBottom:50,
                                     background:"#F3F0FF"
                                 }}>
                                <div style={{
                                    display:"flex",
                                    alignItems:"center",
                                    width:"15%",
                                    borderRight:"1px solid black"
                                }}>
                                    {item.nom}
                                </div>
                                <p style={{
                                    width:"23%",
                                    marginLeft:"5%",
                                    borderRight:"1px solid black"
                                }}>Adresse: {item.adresse}</p>
                                <p style={{
                                    marginLeft:"5%",
                                }}>Site web: {item.site}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </main>
}