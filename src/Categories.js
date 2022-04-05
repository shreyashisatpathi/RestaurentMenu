import React from 'react';

const Categories = ({id,price,img,title,desc}) => {
  return (
  <article key ={id} className ='menuItem'>
    <img src={img} alt ={title} className='photo' />
    <div className='item-info'>
     <header>
      <h4>
        {title}
      </h4>
      <h4 className ='price'>
      {price}
     </h4>
     </header>
     <p className='item-text'>{desc}</p>
    </div>
  </article>

    )

}

export default Categories;
