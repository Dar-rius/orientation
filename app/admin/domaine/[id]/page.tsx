import Link from "next/link";
import prisma from "@/prisma/prisma";

const getData = async (id:string) => {
    try {
        const _id = Number(id)
        const data = await prisma.info_domaine.findUnique({
            where:{
                id:_id
            }
        });
        return data;
    } catch (err) {
        console.error(err);
    }
}
export default async function Info({ params }: { params: { id: string }}){
    const data = await getData(params.id)
    return<>
        <Link href={`/admin/metier/${params.id}`}>
            Ajouter un nouveau metier
        </Link><br/>

        <Link href={`/admin/ecole/${params.id}`}>
            Ajouter une nouvelle ecole
        </Link> <br/>
        <section>
            <button>Supprimer le domaine</button>
            <div>
                <h2>{data?.nom}</h2>
                <p>{data?.description}</p>
            </div>
            <div>
                <h3>Ecole</h3>
                <div>
                    <p>Nom ecole</p>
                    <p>Adresse ecole</p>
                    <Link href={""}>Lien ecole</Link>
                </div>
            </div>
            <div>
                <h3>Metier</h3>
                <div>
                    <p>Nom metier</p>
                    <p>Description metier</p>
                </div>
            </div>
        </section>
    </>
}