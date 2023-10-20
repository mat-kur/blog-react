import {useState} from "react";


export const SearchBar = ({searchQuery, setSearchQuery, threads, setThreads}) => {
    //
    // setSearchQuery('test')
    //
    // console.log(searchQuery)
    const [query, setQuery] = useState('');

    // console.log(searchQuery)
    const handleSearch = async () => {
        setSearchQuery('test')

        console.log(searchQuery)
        // if (typeof setSearchQuery === "function") {
        //     setSearchQuery(query);
        //     const URL = `http://localhost:5000/api/homepage?q=test`;
        //     const response = await fetch(URL);
        //     const data = await response.json();
        //     setThreads(data);
        // } else {
        //     console.error("setSearchQuery is not a function");
        // }
    };

    // const handleSearch = async () => {
    //     console.log(query);
    //     if (typeof setSearchQuery === "function") {
    //         setSearchQuery(query);
    //     } else {
    //         console.error("setSearchQuery is not a function");
    //     }
    //     // reszta twojego kodu
    // };


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