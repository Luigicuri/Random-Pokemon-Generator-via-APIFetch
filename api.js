//Author: Luigi Curi


function pokefetch() {

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
                    let img = document.getElementById('pic').innerHTML = data['sprites']['front_default'];
                    document.getElementById('nome').innerHTML = data['name'];
                    document.getElementById('num').innerHTML = data['id'];
                    document.getElementById('type1').innerHTML = data?.types['0']?.type['name'];
                    document.getElementById('type2').innerHTML = data?.types['1']?.type['name'] || "-";
                    document.getElementById('pic').setAttribute('src', img);
                    //console.clear(data);
                })
        };

     load();       
                
    
    
};


