import Button from "./Button";
import Input from "./Input";
import { useState } from 'react';
import { PropTypes } from "prop-types";
import "./SearchBar.css";

function SearchBar(props) {
    const [search, setSearch] = useState('');

    const functionHandler = (data) => {
        props.passSearch(data);   
    }

    return (
        <div className="search-form">
            <Input 
                labelText=""
                placeholderText="Enter course name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button 
                buttonText="Search"
                buttonClick={() => { functionHandler(search) } }
            />
        </div>
    );
}

SearchBar.propTypes = {
    passSearch: PropTypes.func.isRequired,
  }

export default SearchBar;