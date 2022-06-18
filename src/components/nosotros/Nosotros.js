import React from 'react';
import estrellas from './assets/imgs/estrellas.png'
import restaurante from './assets/imgs/restaurante.png'
import Card from 'react-bootstrap/Card'
import styles from './nosotros.module.css'

const Nosotros = () => {
  return (
    <div className={styles.box}>
      <div>
        <img className={styles.foto1} src={restaurante} alt='restaurante'style={{ width: '550px', height:'600px'}} />
      </div>

      <Card className={styles.card} style={{ width: '700px', height:'500px' }}>
      <Card.Title className={styles.flavor}>THE FLAVOR</Card.Title>
      <Card.Subtitle className={styles.sub}>
      Fundado en 2016 bajo el concepto de un restaurante cultural donde nuestros comensales puedan disfrutar de un rico menú acompañado de buena música en un ámbiente agradable para compartir, disfrutar o pasar el rato.
      </Card.Subtitle>
      <Card.Text className={styles.texto}>
      Nos especializamos en comida italiano-americana por lo que podrás disfrutar de córtes de carnes inmersas en nuestras hamburguesas o pastas hechas al día.
      </Card.Text>
      <Card.Text className={styles.texto1}>Contamos con grandes referencias</Card.Text>
      <Card.Img className={styles.foto2} src={estrellas} alt='estrellas'/>
        </Card>
     


    </div>
  )
}

export default Nosotros