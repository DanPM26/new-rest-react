import React, {Fragment, useState } from 'react';
import Categories from './Categories';
import MenuSs from './MenuSs';
import items from './data';
import styles from './menu.module.css'

const allCategories =['all',... new Set(items.map((item)=> item.category))];
console.log(allCategories);

const Menu = () => {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories]=useState(allCategories);


 const filterItems = (category) =>{
  if (category === 'all'){
    setMenuItems(items)
    return;
  }
   const newItems = items.filter((item)=> item.category === category)
   setMenuItems(newItems) 
 }
  return (
   <Fragment>
    <h1 className={styles.titulon}>Nuestro Menú</h1>
  
   <Categories categories={categories} filterItems={filterItems}/>
   <MenuSs items={menuItems}/>
 

   </Fragment>
  )
}



export default Menu