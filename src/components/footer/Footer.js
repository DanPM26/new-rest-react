import React from 'react';
import styles from "./footer.module.css";
import facebook from './assets/img/facebook.svg';
import tuiter from './assets/img/tuiter.svg';
import insta from './assets/img/insta.svg';



const Footer = () => {
  return (
    <>
    <div className={styles.hola}>
      <img className={styles.redes} width={50} height={50} src={facebook} alt='facebook'></img>
      <img  className={styles.redes} width={50} height={50} src={tuiter} alt='facebook'></img>
      <img className={styles.redes} width={50} height={50} src={insta} alt='facebook'></img>
    </div>
   </>
  )
}



export default Footer