import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Ayuda a no hacer refresh del navegador web
        if( inputValue.trim().length <= 1) return; // Validación

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue(''); // Limpia el campo de texto
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={ onInputChange }
            />
        </form>
    )
}
