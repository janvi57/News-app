import React from 'react';

export default function Search({fetchNewsData}) {

    function submitData(event) {
        event.preventDefault();
        let searchTerm = event.target[0].value;
        fetchNewsData(searchTerm);
    }

    return(
        <>
        <form onSubmit={submitData}>
            <input
                type="text"
                placeholder="Search news"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
        </>
    );
    
}

//export default Search;