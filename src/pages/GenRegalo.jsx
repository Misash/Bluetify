import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { keyboard } from '@testing-library/user-event/dist/keyboard';


function generateRandomKey(min, max, places) {
  let value = (Math.random() * (max - min + 1)) + min;
  return Number.parseFloat(value).toFixed(places);
}


function GenRegalo(props) {

  const [saldo, setSaldo] = useState(999);
  const [show, setShow] = useState(false);
  const [codigoRegalo, setCodigoRegalo] = useState(0)

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const url = "http://localhost:3001/";

  //obtener el saldo
  useEffect(() => {
    async function getSaldo() {
      axios.get(`${url}getSaldo/` + props.id_cliente).then((response) => setSaldo(response.data));
    }
    getSaldo();
  }, []);

  //generar un codigo de regalo aleatorio
  const generateCode = () => {
    let key = generateRandomKey(99, 999999)
    console.log("generado")
    setCodigoRegalo(key)
  }

  useEffect(() => {
    let key = generateRandomKey(99, 999999)
    console.log("generado")
    setCodigoRegalo(key)
  }, []);


  //almacenar regalo en base de datos
  const submitGiftCode = () => {
    axios.post(`${url}saveGift`, {
      id_regalo: codigoRegalo,
      id_contenido: props.id_contenido,
    });
  }

  //


  const handleClose = () => { 
    submitGiftCode();
    setShow(false)
    window.location.reload(true);
  };

  const handleShow = () => {

    setCopySuccess('');
    let saldo_cliente = saldo[0].saldo
    //muestra la pantalla modal si el cliente tiene suficiente saldo
    if (saldo_cliente >= props.precio) {
      setShow(true);
      generateCode()
      // generar cifrado de clave
      let key = window.btoa(codigoRegalo)
      console.log("key:", key)
      console.log("decipherkey:", window.atob(key))
  
    }else{
      setShow(false)
    }
  }

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copiado!');
  };




  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Regalar Contenido
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Regalar Contenido</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div>
            {
              /* Logical shortcut for only displaying the 
                 button if the copy command exists */
              document.queryCommandSupported('copy') &&
              <div>
                <Button onClick={copyToClipboard}>Copiar Codigo</Button>
                {copySuccess}
              </div>
            }
            <form>
              <textarea
                ref={textAreaRef}
                value={codigoRegalo}
              />
            </form>
          </div>
          Compártelo con el usuario al que le quieras regalar el contenido,
          una vez activado no se podrá volver a usar.

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GenRegalo