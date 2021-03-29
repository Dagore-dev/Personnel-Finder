import './styles.css';

const SearchResults = ({results}) => {
    return(
        <ul className='list'>
            {results?.map((value) => {
                return(
                    <li className='list__item' key={value.id}>
                        <span>{value.name}</span> <span>{value.email}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResults;