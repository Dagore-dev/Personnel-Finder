import './styles.css'
import { useState } from "react";

const SearchBox = ({onSearch, onClose}) => {
    const [searchText, setSearchText] = useState('');

    const handleClose = (e) => {
        e.preventDefault();
        setSearchText('');
        onClose();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchText);
    }

    return(
        <>
            <h1 className='title'>Buscador de personal</h1>

            <form onSubmit={(e) => handleSubmit(e)} className='form'>

                <input className='form__input' type='text' value={searchText} onChange={({target: {value}}) => {setSearchText(value)}}></input>

                <button className='form__button form__button--search'>Buscar</button>
                <button className='form__button form__button--close' onClick={(e) => handleClose(e)}>Cerrar</button>
            </form>
        </>
    )
}

export default SearchBox;