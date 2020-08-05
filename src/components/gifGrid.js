import React from 'react';
import { UseFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './gitGridItem'
import '../index'


const GifGrid = ({category}) => {   

    const {data:images, loading} = UseFetchGifs(category);
    
   
    return ( 
        <>
        <h3>{category}</h3>   
        {loading && <p className='animate__animated animate_flash'>Cargando...</p> }  
        <div className='card-grid'>                  
            {
                images.map( (item) => (
                     <GifGridItem  key={item.id} {...item}/>   
                ))
            }            
        </div>   
        </>     
     );
}
 
export default GifGrid;