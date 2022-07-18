function fetchPokemon() {
    function load() {
        const numberOfPokemon = 898;
        const id = Math.round(Math.random() * (numberOfPokemon - 1)) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    let img = document.getElementById('pokemonSprite').innerHTML = data['sprites']['front_default'];
                    document.getElementById('pokemonName').innerHTML = data['name'];
                    document.getElementById('pokemonNumber').innerHTML = data['id'];
                    document.getElementById('pokemonType1').innerHTML = data?.types['0']?.type['name'];
                    document.getElementById('pokemonType2').innerHTML = data?.types['1']?.type['name'] || "";
                    document.getElementById('pokemonAbility1').innerHTML = data?.abilities['0']?.ability['name'];
                    document.getElementById('pokemonAbility2').innerHTML = data?.abilities['1']?.ability['name'] || "           ";
                    document.getElementById('pokemonSprite').setAttribute('src', img);
                    //console.clear(data);
                })
        };
     load();
    }    