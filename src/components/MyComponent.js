// import React from 'react'

// const CardContainer = () =>{
//  const [pokemon, setPokemon] = React.useState([]);

// React.useEffect(() => {
//     const url = "https://pokeapi.co/api/v2/pokemon?limit=30";
//   fetch(url)
//   .then((Response) => {
//     if (Response.ok) {
//         return Response.json()
//     } else {
//         throw Response
//     }
//   })
//   .then((data => setPokemon(data.results))
//   .catch((error =>console.log(`Se rompio la paginita ${error.status}`, error))
// }, [])

// return(
//     <div style= {{display:"flex", justifyContent:"space-between"}}>
//     {Pokemon?.map(pokemon =>{
//         return <p>{pokemon.name}</p>
//     })}
//     </div>)
// }

// export default CardContainer
