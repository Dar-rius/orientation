export default function Forms(){
    return(
        <>
            <h1>Ajouter un nouveau</h1>
            <form>
                <input name="Topic" placeholder="Topic"/>
                <input name="Subtitle" placeholder="Subtitle"/>
                <input type="date"/>
                <input type="submit" value="valider"/>
            </form>
        </>
    )
}