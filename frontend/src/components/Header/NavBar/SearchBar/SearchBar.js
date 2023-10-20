import {useState} from "react";


export const SearchBar = ({setSearchRecords, searchQuery, setSearchQuery, threads, setThreads}) => {

    const [query, setQuery] = useState('');
    const handleSearch = async () => {
        console.log(query)
        setSearchQuery(query);
        const URL = `http://localhost:5000/api/homepage?q=test`;
        const response = await fetch(URL);
        const data = await response.json();
        setSearchRecords(data);
        console.log(threads)
    };



    return (
        <>

            <a href="#">
                <form className='form-search' action='#'>
                    <input
                        type='search'
                        placeholder='Search here …'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <i onClick={handleSearch} className="fa fa-search"></i>
                </form>
            </a>

        </>
    );
};