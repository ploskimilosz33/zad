
Aplikacja Pokedex aplikacja do podawania informacji o pokemnonach dla jego nazwy za pomocą React.js.

Wymagane pakiety węzłów "axios" npm install axios


Punkt końcowy interfejsu API: https://pokeapi.co/api/v2/pokemon/${pokemonName}

API https://pokeapi.co/?ref=hackernoon.com Interfejs zawiera wszystkie możliwe informacje dla każdego pokemona
Opis programu


Przy wprowadzeniu danych przez użytkownika wywoła się setPokemonname , która wczyta nazwe  pokemona.
Za pomocą useEffect pobiera dane z API za pośrednictwem axios.get() nastęnie aktualizuje własności 
pokemona.

Hooks:
pokemonName Aktualizuje dane wejsciowe uzytkownika
pokemon aktualizoje własności pokemona



