import React, {useState} from "react";


export const SearchBar = ({setReportData, setSearchQuery}) => {

    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        setSearchQuery(query);
        const URL = `http://localhost:5000/admin/reported-comments/?q=${query}`;
        const response = await fetch(URL);
        const data = await response.json();
        setReportData(data.reportedComments);
    };


    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button onClick={handleSearch} className="submit">SEARCH</button>
        </div>
    );
};