import React from 'react';
import '../index'

const GifGridItem = ({url, title }) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div> 
    );
}
 
export default GifGridItem;