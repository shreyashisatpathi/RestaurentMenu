import React from 'react';
import Categories from './Categories';

const Menu = ({menus})=>{
  return (
    <div className='section-center'>
      {menus.map((menu)=>{
         console.log(menu)
         return <Categories key ={menu.id} {...menu}/>
   }

   )
    
    }

   </div>

  )
}
export default Menu;
