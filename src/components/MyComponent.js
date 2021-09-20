import * as React from "react";

const CardContainer =() =>{
    const [Pokemon, setPokemon] =React.useState([]);
    
    React.useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    
    fetch(url)
    .then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw response;
    }
    })
    .then((data) => setPokemon(data.results))
    .catch((error) => console.log(`Se ha detectado un error, ${error.status}`));
    },[])
    
    
    return(
        <div style={{display: 'flex', justifyContent:"space-between"}}>{
        {Pokemon?.map(pokemon =>{
            return (
            <p
            Pokemon={Pokemon.name}
            />
            )
        )}
        </div>
    )
}

export default CardContainer;
