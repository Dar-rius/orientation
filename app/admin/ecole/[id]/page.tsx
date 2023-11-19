import EcoleComp from "@/components/client/admin/domaine/ecole";

export default function Metier( {params}:{params:{id:string}} ){
    const id = Number(params.id)
    return<>
        <section>
           <h2>test</h2>
            <EcoleComp id={id}/>
        </section>
    </>
}