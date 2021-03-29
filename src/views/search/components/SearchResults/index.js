import './styles.css';
import SearchResultsItem from './SearchResultsItem/index';

const SearchResults = ({results, isSearching}) => {
    return(
        <ul className='list'>
            {!results.length && isSearching && <li className='list__item' key='void'>No se encontraron coincidencias</li>}

            {results?.map((value) => {
                return(
                    <SearchResultsItem key={value.id} {...value}/>//Con el spread operator en value le pasamos todas las props al componente.
                )
            })}
        </ul>
    )
}

export default SearchResults;