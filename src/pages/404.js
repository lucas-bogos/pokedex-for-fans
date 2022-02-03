import styles from "../styles/404.module.css"
import Image from "next/image"

export default () => {
    return <div className={styles.not_found}>
        <h1>Oh não, Equipe Rocket!</h1>
        <Image
            src="/images/equipe-rocket.png"
            width="250"
            height="250"
            alt="Equipe Rocket"
        />
    </div>
}