import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Navbar.module.css";

export default () => {
  return <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Image
        src="/images/pokeball.png"
        width="30px"
        height="30px"
        alt="Pokedex for fans"
      />
      <h1>Pokédex <span>For Fans</span></h1>
    </div>
    <ul className={styles.link_items}>
      <li>
        <Link href="/"><a>Home</a></Link>
      </li>
      <li>
        <Link href="/about"><a>Sobre</a></Link>
      </li>
    </ul>
  </nav>
}