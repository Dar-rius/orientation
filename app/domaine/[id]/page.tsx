import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CompDomaine from "@/components/head";
import prisma from "@/prisma/prisma";
import style from "@/styles/info.module.css"
import {Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Box} from "@chakra-ui/react";

async function getDomaine({id}:{id:number}){
    try{
        const _id = id
        const res = await prisma.info_domaine.findUnique({
            where:{
                id:_id
            },
            include:{
              Ecole: true,
                Metier:true
            }
        })
        return res
    } catch (err){
        throw err
    }
}

export default async function Domaine({params}:{params:{id:string}}){
    const id = Number(params.id)
    const data = await getDomaine({id})

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
                        {data?.nom}
                    </h1>
                    <p>{data?.description}</p>
                </div>
                <div>
                    <h1 style={{
                        marginBottom:20
                    }}>Debouches</h1>
                    <div style={{
                        marginBottom:50
                    }}>
                        {data?.Metier.map((item) => (
                            <Accordion key={item.id}  allowToggle>
                                <AccordionItem mb={10}>
                                    <h2>
                                        <AccordionButton  color="black" bg="white" borderRadius={31}>
                                            <Box as="span" flex='1' textAlign='left' p="3%" fontSize={16}>
                                                {item.nom}
                                            </Box>
                                            <AccordionIcon fontSize='25px' mr={30}/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={10}>
                                        {item.resume}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>

                    <h1 style={{
                        marginBottom:20
                    }}>Universites et institus</h1>
                    <div style={{
                        marginBottom:50
                    }}>
                        {data?.Ecole.map((item) => (
                            <div key={item.id}
                                 style={{
                                     border:"1px solid black",
                                     borderRadius: 29,
                                     display:"flex",
                                     alignItems:"center",
                                     padding:"4% 20px",
                                     marginTop:50,
                                     marginBottom:50,
                                     background:"#F3F0FF",
                                     paddingTop: "1%",
                                     paddingBottom: "1%",
                                 }}>
                                <div style={{
                                    width:"14%",
                                    borderRight:"1px solid black",
                                    padding:"0% 20px",
                                    paddingTop: "2.2%",
                                    paddingBottom: "2.2%",
                                    fontWeight:"bold"
                                }}>
                                    {item.nom}
                                </div>
                                <p style={{
                                    width:"23%",
                                    marginLeft:"1.5%",
                                    borderRight:"1px solid black",
                                    paddingTop: "2.2%",
                                    paddingBottom: "2.2%",
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