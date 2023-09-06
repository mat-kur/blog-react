import React, { useState } from 'react';

const SearchBar = ({setReportData, setSearchQuery}) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        setSearchQuery(query);
        const URL = `http://localhost:5000/admin/reported-comments/?q=${query}`;
        const response = await fetch(URL);
        const data = await response.json();
        setReportData(data.reportedComments);
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
