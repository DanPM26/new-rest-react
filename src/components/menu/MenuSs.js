import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './menus.module.css'

const MenuSs = ({items}) => {
  return <div>
    {items.map((menuItem)=>{
      const {id,title,img,desc,price}= menuItem;
      return <Card className={styles.main} style={{ width: '500px'}} key={id}>
        <img className={styles.photo} src={img} alt={title}/>
        <div className={styles.info}>
          <h4 className={styles.titulo}>{title}</h4>
          <h5 className={styles.prices}>${price}</h5>
          <h6>{desc}</h6>
        </div>
      </Card>

    })}
  </div>
}
export default MenuSs