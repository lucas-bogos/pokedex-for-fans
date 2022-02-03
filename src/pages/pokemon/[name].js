import Image from "next/image";
import styles from "../../styles/Pokemon.module.css"

export const getStaticPaths = async () => {
    const maxPokemons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon";
    
    const response = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await response.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params: {
                name: pokemon.name
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const name = context.params.name

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    const data = await res.json()

    return {
        props: {
            pokemon: data
        }
    }
}


export default ({ pokemon }) => {
    return <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="120"
            height="120"
            alt={pokemon.name}
        />
        <div>
            <h3>Número: </h3>
            <p>#{pokemon.id}</p>
        </div>
        <div>
        <h3>Tipo: </h3>
            <div className={styles.types_container}>
                {pokemon.types.map((item, index) => (
                    <span className={`${styles.type} ${styles["type_" + item.type.name]}`} key={index}>{item.type.name}</span>
                ))}
            </div>
        </div>
        <div className={styles.data_container}>
            <div className={styles.data_height}>
                <h4>Altura: </h4>
                <p>{pokemon.height * 10} cm</p>
            </div>
            <div className={styles.data_weight}>
                <h4>Peso: </h4>
                <p>{pokemon.weight / 10} kg</p>
            </div>
        </div>
    </div>
}