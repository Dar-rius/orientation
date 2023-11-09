import Link from "next/link";

export default function Domaine(){
    return<>
        <Link href={"/ecole"}>
            Rechercher un eleve
        </Link> <br/>

        <Link href={"/metier"}>
            Ajouter un nouveau metier
        </Link><br/>

        <Link href={"/forms"}>
            Ajouter un nouveau domaine
        </Link><br/>
    </>
}