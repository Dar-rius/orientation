import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Profile from "@/public/conseiller/User.svg"
import Image from "next/image";
import prisma from "@/prisma/prisma";
import Phone from "@/public/footer/phone.svg"

async function getData(){
    try{
        let res = await prisma.conseiller.findMany()
        return res
    } catch(err){
        console.error(err)
    }
}

export default async function Conseiller(){
    const data = await getData()
    return<main style={{background:"white", color:"black" }}>
        <Header/>
        <section style={{marginRight:50, marginLeft:50}}>
            <h1>Contactez nos conseillers</h1>
                {data?.map((item)=> (
                    <div key={item.id}
                        style={{border:"1px solid black",
                            borderRadius: 29,
                            display:"flex",
                            alignItems:"center",
                            padding:"2% 20px",
                            marginRight:250,
                            marginTop:50,
                            marginBottom:50,
                        }}>
                        <div style={{
                            display:"flex",
                            alignItems:"center",
                            width:"20%",
                            borderRight:"1px solid black"
                        }}>
                            <Image src={Profile} alt="Profile"
                            style={{marginRight:10}}/>
                            <div>
                                <p style={{fontWeight:"bold"}}>{item.nom} {item.prenom}</p>
                                <p style={{color:"#9C9C9C"}}>{item.genre}</p>
                            </div>
                        </div>

                        <div style={{
                            width:"23%",
                            marginLeft:"5%",
                            borderRight:"1px solid black"
                        }}>
                            <p>Email: <span style={{color:"#9C9C9C"}}>{item.email}</span></p>
                            <p>Telephone: <span style={{color: "#9C9C9C"}}>{item.telephone}</span></p>
                        </div>
                        <div style={{
                            width:"40%",
                            marginLeft:"3%",
                        }}>
                            <p style={{lineHeight:.7}}>{item.description}</p>
                        </div>
                        <div style={{
                            background:"#FFE3EE",
                            display: "flex",
                            justifyContent: "center",
                            border: "1px solid black",
                            padding:"15px 14.05px 15px 14.705px",
                            borderRadius: 17,
                            marginLeft:20
                        }}>
                            <Image src={Phone} alt="phone"
                                   width={30}
                                   height={30}
                            />
                        </div>
                    </div>
                ))}
        </section>
        <Footer/>
    </main>
}