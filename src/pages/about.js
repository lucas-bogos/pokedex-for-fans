import Image from "next/image";
import styles from "../styles/About.module.css";

export default () => {
    return <div className={styles.about}> 
        <h1>Sobre</h1>
        <p>Este é um projeto de uma pokedéx para fãns da incrível série animada japonesa de Pokémon.</p>
        <Image
            src="/images/charizard.png"
            width="300"
            height="300"
            alt="Charizard"
        />
    </div>
}