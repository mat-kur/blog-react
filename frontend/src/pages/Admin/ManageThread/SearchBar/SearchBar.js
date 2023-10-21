import {useState} from "react";


export const SearchBar = ({threadList, setThreadList, setSearchQuery}) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        setSearchQuery(query);
        const URL = `http://localhost:5000/admin/users-list/?q=${query}`;
        const response = await fetch(URL);
        const data = await response.json();
        setThreadList(data);
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
}