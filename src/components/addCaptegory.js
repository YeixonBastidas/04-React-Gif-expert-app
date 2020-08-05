import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
        
    const handlerInput = (e) => {
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(cast => [...cast, inputValue]);
            setInputValue('')
        }
        
    }

    return ( 
        <form onSubmit={handlerSubmit}>
            <input 
                type="Text"
                value={inputValue}
                onChange={handlerInput}
                placeholder='Nombre del heroe'
                />
        </form>
     );
}
 
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;