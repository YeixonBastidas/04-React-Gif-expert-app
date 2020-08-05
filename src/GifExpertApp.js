import React, { useState } from 'react';
import AddCategory from './components/addCaptegory';
import GifGrid from './components/gifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);
    
    return (
       <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
        
        <ol>
            {
              categories.map((x, i) => (
                <GifGrid key={i} category={x}/>
              ))  
            }
        </ol> 
       </> 
   )
}


export default GifExpertApp;


