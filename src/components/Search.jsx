import React, { useState } from 'react'
import Ship from './Ship'

function Search(props) {
    const [searchShips, setSearchShips] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)
    const [displayShips, setDisplayShips] = useState([])

    const ships = async (e) => {
        e.target.value.toLowerCase()
        const response = await fetch(
            `https://swapi.dev/api/starships/?search=${e.target.value.toLowerCase()}`
        )
        const data = await response.json()

        if (data.results.length > 0) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
        props.setSearchShips()

        setSearchShips(data.results)
    }

    const listOfShips = searchShips.map((el) => {
        return (
            <div className="ships">
                <p>{el.name}</p>
                <button
                    className="add-btn"
                    onClick={() => {
                        setDisplayShips((prev) => [...prev, el])
                        console.log(displayShips)
                        // setShowDropdown(true);
                    }}
                >
                    +
                </button>
            </div>
        )
    })

    return (
        <div className="master">
            <header className="App-header">
                <input
                    onChange={ships}
                    placeholder="Look for a ship"
                    type="text"
                />
                {showDropdown && (
                    <div className="dropdown-content">{listOfShips}</div>
                )}
            </header>
            <div className="display-ships">
                {displayShips.map((i) => (
                    <Ship
                        name={i.name}
                        model={i.model}
                        class={i.starship_class}
                        crew={i.crew}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search
