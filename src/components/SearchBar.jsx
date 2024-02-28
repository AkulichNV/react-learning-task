import Button from "./Button";
import Input from "./Input";
import { useState } from 'react';
import "./SearchBar.css";

function SearchBar() {
    const [search, setSearch] = useState('');

    return (
        <form className="search-form">
            <Input 
                labelText=""
                placeholderText="Enter course name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button 
                buttonText="Search"
                buttonClick={() => { console.log("Click Search"); } }
            />
        </form>
    );
}

export default SearchBar;