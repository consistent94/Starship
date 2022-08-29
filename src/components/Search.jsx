import React, { useState } from "react";

function Search() {

    const [searchShips, setSearchShips] = useState("")
    const [showDropdown, setShowDropdown] = useState(false)
    const [displayShip, setDisplayShip] = useState([])

    const ships = async (e) => {
        e.target.value.toLowerCase()
        const response = await fetch(`https://swapi.dev/api/starships/?search=${e.target.value.toLowerCase()}`)
        const data = await response.json();
    
        setSearchShips(data.results.name)
        console.log(data);
        
    }


    const listOfShips = displayShip.map((el) => {
      return (
        <div className="ships">
          <p>{el.name}</p>
          <button
            className="add-btn"
            onClick={() => {
              setDisplayShip((prev) => [...prev, el]);
              setShowDropdown(true);
            } }
          >
            +
          </button>
        </div>
      );
    });

    return (
        <header className="App-header">
            <input onChange={ships} placeholder='Look for a ship' type='text' />
            { showDropdown ? (<div className="dropdown-content">{listOfShips}</div>) : null}
            <p>{displayShip}</p>
        </header>
    )

}

export default Search;