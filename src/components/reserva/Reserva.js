import React,{useEffect,useState} from 'react';
import {onSnapshot,collection,addDoc,deleteDoc,doc} from 'firebase/firestore';
import { db } from '../../firebase';
import  Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import styles from './reserva.module.css'

const Reserva = () => {



  const [reserva,setReserva] = useState([]);
  const [form,setForm] = useState({});

  const getData = () => {
    const ReservaCion = [];

    onSnapshot(collection(db,'reservaciones'),(snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        ReservaCion.push({...doc.data(),id: doc.id})
        setReserva(ReservaCion)
        console.log(ReservaCion)

      })
    })
  }

  const handleClick = async() =>{
    await addDoc(collection(db,'reservaciones'),form);
    setForm({});
    getData();
  }

  const deleteElement = async(id) =>{
    console.log(id);
    await deleteDoc( doc(db, 'reservaciones',id));
    getData();
  }
  const handleChange = (ev) =>{
    const date = new Date(Date.now())

    setForm({
      ...form,
      [ev.name]: ev.name === 'number' ? ev.number: ev.value,
      date: date
    })
    console.log(form)
  }

  useEffect(()=>{
    getData()
 
  
  },[])
  return (
    <>
    <h1 className={styles.titulo}>Reservaciones</h1>
<div className={styles.cuadro}>
     <Card  className={styles.formulario} style={{ width: '500px' }}>
      <input  className={styles.form} type='text' placeholder='Nombre' name='nombre' onChange={(e) => handleChange(e.target)}/>
      <input  className={styles.form} type='email'  placeholder='Correo' name='correo' onChange={(e) => handleChange(e.target)}/>
      <input  className={styles.form} type='number'  placeholder='Mesa' name='mesa' onChange={(e) => handleChange(e.target)}/>
      <Button  variant="outline-danger" onClick={() => handleClick()}>Guardar</Button>
      </Card>
     </div>
     <div className={styles.insideform}>
      {
        reserva.map(todo =>{
          return(
            <>
            <Card className={styles.insideformulario} style={{ width: '500px', height: '100px' }}>
              <Alert className={styles.inform}>
              <h5>Reserva guardada con exito!</h5>
              <h6>Si deseas cancelarla utiliza el botón Cancelar </h6>
              </Alert>
            <h5 className={styles.text}>{todo.nombre}</h5>
            <h5 className={styles.text}>{todo.correo}</h5>
            <h5 className={styles.text}>{todo.mesa}</h5>
            <Button className={styles.boton} variant="danger" onClick={() => deleteElement(todo.id)}>
              Cancelar
            </Button>
            </Card>
            </>
          )
        })
      }
     </div>

  </>
  )
}

export default Reserva