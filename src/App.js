import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import ClickedButtons from './ClickedButtons';

const allCategory= ['all',...new Set(items.map((item)=>
item.category))]
console.log(allCategory);

function App(){
  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategory)

  const filterItems = (catagory)=>{
    console.log (catagory)
    if (catagory==='all'){
    setMenuItems(items)
    return
    }
    const newItems = items.filter((item)=>item.category=== catagory);
    setMenuItems(newItems)
  }
  return (
  <section className="menu section">
    <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
      <ClickedButtons categories={categories}  filterItems ={filterItems}/>
     </div>
     <Menu  menus={menuItems}/>
     
  </section>
  )
}
 export default App;