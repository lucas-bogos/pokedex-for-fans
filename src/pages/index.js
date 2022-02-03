import Card from "../components/ui/Card";
import styles from "../styles/Home.module.css";
import axios from "axios";

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  data.results.forEach((item, index) => {
    item.id = index + 1
  });

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default ({ pokemons }) => {        
  return <>
    <div className={styles.title_container}>
      <h1 className={styles.title}><span>Poké</span>dex</h1>
    </div>
    <div className={styles.pokemon_container}>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  </>
}