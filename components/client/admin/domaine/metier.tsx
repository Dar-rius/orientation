'use client'
import React, {useRef} from "react"

export default function MetierComp({id}:{id:number}){
    let nom = useRef("");
    let description = useRef("");
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const data = {
                nom: nom.current,
                description: description.current,
                id_domaine: id};
            await fetch("/api/admin/infos/metier", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <>
            <h2>Formulaire</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Nom" name="nom" onChange={
                    (e)=>(nom.current=e.target.value)
                }/>
                <textarea name="description"  onChange={
                    (e)=>(description.current=e.target.value)
                }/>
                <input type="submit" value="Valider"/>
            </form>
        </>
    )
}