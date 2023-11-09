'use client'
import React, {useRef} from "react"

export default function FormsComp(){
    let nom = useRef("");
    let description = useRef("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
            try {
                const data = { nom: nom.current,
                    description: description.current };
                const res = await fetch("/api/admin/infos/domaine", {
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