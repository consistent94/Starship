import React, { useState } from "react";

function Search() {

    const [searchShips, setSearchShips] = useState("")

    const ships = async (e) => {
        const response = await fetch(`http https://swapi.dev/api/starships/?search=${e.target.value.toLowerCase()}`)
        const data = response.json();
        e.target.value.toLowerCase()
    
        setSearchShips(data.result)
        console.log(searchShips)
    }

    return (
        <header className="App-header">
            <input onChange={ships} placeholder='Look for a ship' type='text' />
        </header>
    )
}

export default Search;