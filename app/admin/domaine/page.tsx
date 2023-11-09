import Link from "next/link";
import prisma from "@/prisma/prisma";

const getData = async () => {
    try {
        const data = await prisma.info_domaine.findMany();
        return data;
    } catch (err) {
        console.error(err);
    }
}

export default async function Domaine(){
    const data = await getData()
    return(
        <>
            <Link href={"/admin/domaine/forms"}>
                Ajouter un domaine
            </Link><br/>

            <div>
                {data?.map((item) =>(
                    <div key={item.id}>
                        <Link href={`/admin/domaine/${item.id}`}>
                            <p>{item.nom}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}