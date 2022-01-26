function Pokemon(props){
  const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };
  
  return(
    <div className='flex' style={{backgroundColor : colours[props.type]}}>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  )
}

function App(){
  const [allPokemons, setAllPokemons] = React.useState([]);
  const [pokemonData, setPokemonData] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);

  React.useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(res => res.json())
    .then(json => setAllPokemons(json.results));

  }, [])

  React.useEffect(() => {
    allPokemons.map(pokemon => {
      fetch(pokemon.url)
      .then(res => res.json())
      .then(json => setPokemonData(state => ([...state,
        json
      ])))
    })
  }, [allPokemons]);

  React.useEffect(() => {
    setSearchResult(pokemonData.filter(function(pkmn){
    return pkmn.name.includes(searchInput);
  }));
  }, [searchInput])

  React.useEffect(() => {
    setSearchResult(pokemonData);

  }, [pokemonData])

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    
  }

  return(
    <React.Fragment>
      <form>
        <input type="text" value={searchInput} onChange={handleChange}/>
      </form>
        { 
          searchResult.map(pokemon => 
            <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.types[0].type.name} img={pokemon.sprites.front_default}/>)
        }
    </React.Fragment>
  )
}
ReactDOM.render(<App/>, document.querySelector('#app'));

