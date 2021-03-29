import './styles.css'
import SearchBox from './components/SearchBox/index';
import { useState } from 'react';
import data from '../../data/user.json';
import SearchResults from './components/SearchResults';

const Search = () => {
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);

    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(data?.length){//Comprueba que tiene la propiedad length
            const lowercase = searchText.toLowerCase();
            const filteredData = data.filter((value) => {
                return (
                    value.name.toLowerCase().includes(lowercase) ||
                    value.username.toLowerCase().includes(lowercase) ||
                    value.email.toLowerCase().includes(lowercase) ||
                    value.phone.toLowerCase().includes(lowercase)
                )
            });
            setResults(filteredData);
        }
    };
    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    };
    return(
        <div className={`container ${isAtTop ? 'top' : 'center'}`}>
            
            <SearchBox onSearch={(searchText) => handleSearchClick(searchText)} onClose={() => handleCloseClick()} isSearching={isAtTop}/>
            <SearchResults results={results} isSearching={isAtTop}/>
            
        </div>
    )
}

export default Search;