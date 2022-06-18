import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.cabeza}>
      THE FLAVOR
<Button variant="light">
<NavLink className={styles.box} to='/'> Nosotros </NavLink>
</Button>{' '}

<Button variant="light">
<NavLink className={styles.box}to='/menu'> Menú </NavLink>
</Button>{' '}


<Button variant="light">
<NavLink className={styles.box} to='/reserva'> Reserva </NavLink>
</Button>{' '}


    </div>
  )
}

export default Header