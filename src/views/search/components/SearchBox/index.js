import './styles.css'
import { useState } from "react";

const SearchBox = ({onSearch, onClose}) => {
    const [searchText, setSearchText] = useState('');

    const handleClose = (e) => {
        e.preventDefault();
        setSearchText('');
        onClose();
    }

    return(
        <>
            <h1 className='title'>Buscador de personal</h1>

            <div className='form'>

                <input className='form__input' type='text' onChange={({target: {value}}) => {setSearchText(value)}}></input>

                <button className='form__button form__button--search' onClick={() => onSearch(searchText)}>Buscar</button>
                <button className='form__button form__button--close' onClick={(e) => handleClose(e)}>Cerrar</button>
            </div>
        </>
    )
}

export default SearchBox;