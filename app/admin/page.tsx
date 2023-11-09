import Link from "next/link";

export default function Admin(){
    return(
        <>
        <Link href={"/admin/eleves"}>
            Rechercher un eleve
        </Link> <br/>

            <Link href={"/admin/domaine"}>
                Ajouter un nouveau domaine
            </Link><br/>

            <Link href={"/admin/discusion"}>
                Ajouter un nouvelle discusion
            </Link><br/>

            <Link href={"/admin/conseiller"}>
                Ajouter un nouveau conseiller
            </Link><br/>
        </>
    )
}