import React from 'react';
import styles from './categories.module.css'

const Categories = ({categories,filterItems}) => {
  return (
    <div>
        {categories.map((category,index)=>{
            return(
                
                <button className={styles.boton} key={index} onClick={()=>filterItems(category)}>
                    {category}
                </button>
               
            )
        })}
    </div>
  )
}

export default Categories