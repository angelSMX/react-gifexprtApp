import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () =>{
 
    //const categories = ['One Punch', 'Samurai X','Dragon Ball'];

    const [ Categories, setCategories] = useState(['One Punch']);


    // const handleAdd =() =>{ 
    //     setCategories(['Hola', ...Categories]);
    //     //setCategories(cats => ['Hola', ...Categories]);
    
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
          
            <ol>
                {
                    Categories.map( category =>(
                         <GifGrid 
                         key = { category } 
                         category={ category } />
                    ))
                }


            </ol>
        </>

    )
}