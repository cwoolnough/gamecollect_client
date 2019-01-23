import React from 'react';
import './SearchMenu.css';


const SearchMenu = (props) => {

    const handleChange = (event) =>{
        props.search(event.target.value)
    }

    return (
        <div className="search-menu">
            <input className="form_input" placeholder="Filter Your Search" onChange={handleChange} />
            <button className="form_submit" onClick={props.sort}>Sort By Name </button>
        </div>
    )
}

export default SearchMenu ;