import React, { useEffect, useState } from "react";
import axios from "axios";


const PokeApp = () =>{
    
    const [pokemonName, setPokemonName] = useState('');
    const [pokemon, setPokemon] = useState({})
    

    useEffect(() => {
        
        PokemonData()
       

    })
    const PokemonData = () =>{
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => {
            setPokemon({
                name: pokemonName,
                species: res.data.species.name,
                img: res.data.sprites.front_default,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                type: res.data.types[0].type.name,
            })
            
        })
    }
   
    


    return(
        <div className="PokeApp">
            <div className="Card">
                <h1>Pokedex</h1>
                <input onChange={(event) => setPokemonName(event.target.value)}/>
               
            </div>
            <h3>Please wrtie name a Pokemon</h3>

            <img src={pokemon.img} alt =""/>

            <div className="name">{pokemonName}</div>
                
                 <div className="Species">Species:{pokemon.species}</div>
                    <div className="type">Type:{pokemon.type}
                        <div className="Hp"/>Hp: {pokemon.hp}</div>
                         
                         <div className="Attack">Attack: {pokemon.attack}</div>
                         <div className="Defence">Defence:{pokemon.defense}</div>
              

        </div>
    )
   
    
}
export default PokeApp

    







