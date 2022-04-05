import React, { useState } from 'react';

 const ClickedButtons =({categories,filterItems})=>{
     console.log(categories,'print the categories')
    return(
        <div className="btn-container">{
            categories.map((category,index)=>{
           return(
            <button
            type="button"
            className="filter-btn"
            key ={index}
            onClick={()=>filterItems(category)}>
             {category}
            </button>
           )
          })  
        }
        </div>
    )
}

export default ClickedButtons;