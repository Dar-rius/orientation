import styles from "@/styles/comp.module.css";

export default function CompDomaine(){
    return (
        <div className={styles.header}>
            <p>The blog</p>
            <h1>Ecrit par notre equipe</h1>
            <p className={styles.para}>Les dernieres news de la communaute et informations sur les domaine</p>
        </div>
    )
}