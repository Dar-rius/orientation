import Link from "next/link";

export default function Discusion(){
    return<>
        <Link href={"/admin/discusion/forms"}>Ajouter un nouveau</Link>
        <h1>discusion</h1>
        <div>
            <div>
                <Link href={""}>
                    <p>topic</p>
                    <p>Subtitle</p>
                    <p>Date</p>
                </Link>
            </div>
        </div>
    </>
}