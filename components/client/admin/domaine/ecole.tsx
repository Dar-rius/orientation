'use client'
import React, {useRef} from "react";

export default function EcoleComp({id}:{id:number}){
    let nom = useRef("");
    let adresse = useRef("");
    let site = useRef("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const data = { nom: nom.current,
                adresse: adresse.current,
                site: site.current,
                id_domaine:id};
            const res = await fetch("/api/admin/infos/ecole", {
                method: "POST",
                body: JSON.stringify(data),
            });
            console.log(res.json())
            if (!res.ok) {
                console.error("Error in request");
            }
            return res;
        } catch (err) {
            console.error(err);
        }
    }

    return<>
        <h2>Formulaire</h2>
        <form onSubmit={handleSubmit}>
            <input placeholder="Nom" name="nom" onChange={
                (e) => (nom.current = e.target.value)
            }/>
            <input placeholder="Adresse" name="adresse" onChange={
                (e) => (adresse.current = e.target.value)
            }/>
            <input placeholder="Lien du site de l'ecole" name="site" onChange={
                (e) => (site.current = e.target.value)
            }/>
            <input type="submit" value="Valider"/>
        </form>
    </>
}