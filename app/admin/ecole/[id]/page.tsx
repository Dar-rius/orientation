import MetierComp from "@/components/client/admin/domaine/metier";

export default function Metier( {params}:{params:{id:string}} ){
    const id = Number(params.id)
    return<>
        <section>
           <h2>Metier</h2>
            <MetierComp id={id}/>
        </section>
    </>
}