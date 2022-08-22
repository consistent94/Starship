import React, { useState } from "react";

function Search() {

    const [searchShips, setSearchShips] = useState("")
    const [showDropdown, setShowDropdown] = useState(true)
    const [displayShip, setDisplayShip] = useState([])

    const ships = async (e) => {
        const response = await fetch(`http https://swapi.dev/api/starships/?search=${e.target.value.toLowerCase()}`)
        const data = response.json();
        e.target.value.toLowerCase()
    
        setSearchShips(data.results)
        
    }

    const listOfShips = searchShips.map((el) => (
        <div className="ships">
          <p>{el.name}</p>
          <button
            className="add-btn"
            onClick={() => {
              setDisplayShip((prev) => [...prev, el]);
              setShowDropdown(false);
            }}
          >
            +
          </button>
        </div>
      ));

    return (
        <header className="App-header">
            <input onChange={ships} placeholder='Look for a ship' type='text' />
            { showDropdown ? (<div className="dropdown-content">{listOfShips}</div>) : null}
        </header>
    )
}

export default Search;