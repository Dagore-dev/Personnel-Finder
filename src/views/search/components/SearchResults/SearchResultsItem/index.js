import './styles.css'

const SearchResultsItem = ({name, email}) => {

    return(
        <li className='list__item'>
            <span>{name}</span>
            <span>{email}</span>
        </li>
    )
}

export default SearchResultsItem;