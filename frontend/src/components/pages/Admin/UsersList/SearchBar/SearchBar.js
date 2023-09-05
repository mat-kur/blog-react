import React, { useState } from 'react';

const SearchBar = ({usersList, setUsersList, setSearchQuery}) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        setSearchQuery(query);
        const URL = `http://localhost:5000/admin/users-list/?q=${query}`;
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setUsersList(data);
    };


    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
