import Link from "next/link";
import Image from "next/image";
import Email from "@/public/footer/email.svg"
import Location from "@/public/footer/location.svg"
import Phone from "@/public/footer/phone.svg"
import End from "@/public/footer/flemme.svg"
import Line from "@/public/footer/lineChelou.svg"
import Facebook from "@/public/footer/facebook.svg"
import Insta from "@/public/footer/insta.svg"
import Youtube from "@/public/footer/youtub.svg"
import Twitter from "@/public/footer/twitter.svg"
import Line1 from "@/public/footer/line.svg"

export default function Footer(){
    return <footer style={{
        marginTop:"7%",
        background:"white"
    }}>
        <div style={{
            paddingTop:"3%",
            borderTop:"dashed 2px #F875AA",
            //borderStyle: "dashed solid",
            borderBottom:"none",
            borderRight:"none",
            borderLeft:"none",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"start",
        }}>
            <div>
                <p style={{
                    marginBottom:10,
                    fontWeight:500,
                }}>Reseaux</p>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                }}>
                    <Link href={""}>
                        <Image src={Facebook}
                               alt={"facebook"}
                               width={40}
                               height={40}
                               style={{
                                   marginRight:5
                               }}
                        />
                    </Link>

                    <Link href={""}>
                        <Image src={Twitter}
                               alt={"twitter"}
                               width={40}
                               height={40}
                               style={{
                                   marginRight:5
                               }}
                        />
                    </Link>

                    <Link href={""}>
                        <Image src={Insta}
                               alt={"Instagram"}
                               width={40}
                               height={40}
                               style={{
                                   marginRight:5
                               }}
                        />
                    </Link>

                    <Link href={""}>
                        <Image src={Youtube}
                               alt={"Youtube"}
                               width={40}
                               height={40}
                        />
                    </Link>
                </div>
            </div>

            <div style={{
                display:"flex",
                flexDirection:"column",
            }}>
                <p style={{
                    marginBottom:10,
                    fontWeight:500,
                }}>
                    Liens Rapides
                </p>
                <Image src={Line}
                       alt="Line"
                       style={{
                           marginBottom:10,
                       }}/>
                <Link href={"/"} style={{
                    marginBottom:15
                }}>
                <span style={{
                    color:"#F875AA",
                    fontWeight:600,
                    marginRight:10,
                }}> {'>'} </span> Home
                </Link>
                <Link href={"/explain"} style={{
                    marginBottom:15
                }}>
                <span style={{
                    color: "#F875AA",
                    fontWeight:600,
                    marginRight:10,
                }}> {'>'} </span>
                    A propos de nous
                </Link>
                <Link href={""} >
                <span style={{
                    color: "#F875AA",
                    fontWeight:600,
                    marginRight:10,
                }}> {'>'} </span>
                    Communaute
                </Link>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <p style={{
                    marginBottom:10,
                    fontWeight:500,
                }}>Contact</p>
                <Link href={""} style={{
                    marginBottom:15,
                    display:"flex",
                    alignItems:"center",

                }}>
                    <Image
                        src={Location}
                        alt={"Lieu"}
                        width={30}
                        height={30}
                        style={{
                            marginRight:10,
                        }}
                    />
                    <p>Dakar Plateau, Rue Saint Michel</p>
                </Link>
                <Link href={""} style={{
                    marginBottom:15,
                    display:"flex",
                    alignItems:"center",
                }}>
                    <Image
                        src={Email}
                        alt={"Email"}
                        width={30}
                        height={30}
                        style={{
                            marginRight:10,
                        }}/>
                    <p>Ucao@Ucao.Edu.sn</p>
                </Link>
                <Link href={""} style={{
                    marginBottom:15,
                    display:"flex",
                    alignItems:"center",
                }}>
                    <Image
                        src={Phone}
                        alt={"Phone"}
                        width={30}
                        height={30}
                        style={{
                            marginRight:10,
                        }}/>
                    <p>+221 800 00 50 50</p>
                </Link>
            </div>
        </div>
            <Image src={End}
                   alt={"Fin"}
                   style={{
                       width:"100%",
                       height:"100%"
                   }}
            />
    </footer>
}