import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory);
        // categories.push(newCategory); así es como no se debe hacer
        setCategories([ newCategory, ...categories ]);
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
            // setCategories= {setCategories}
            onNewCategory= {(value) => onAddCategory(value)}
        />

        {/* Listado de gif */}
        <ol>
            {
                categories.map( category => {
                    return <li key= { category }>{category}</li>
                })
            }
        </ol>
    </>
  )
}
