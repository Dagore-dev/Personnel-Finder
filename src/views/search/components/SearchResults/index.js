
const SearchResults = ({results}) => {
    return(
        <ul>
            {results?.map((value) => {
                return(
                    <li key={value.id}>
                        {value.name}. {value.email}
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResults;