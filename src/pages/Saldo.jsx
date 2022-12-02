import React, { Fragment, useState, useEffect } from "react";
import "../CSS/saldo.css"
import { Link } from "react-router-dom";
import Axios from "axios"
import NavBar from "./NavbarAdmin";

function Saldo() {
  const [usernameReg, setUsernameReg] = useState("");
  const [saldoReg, setsaldoReg] = useState("");
  const [saldostatus, saldostatusReg] = useState("");

  const submitSaldo = () => {
    Axios.post("http://localhost:3001/saldo", {
      username: usernameReg,
      saldo: saldoReg,
    }).then((response) => {
      if (response.data.message) {
        saldostatusReg(response.data.message)
      }
    })
  }
  return (
    <Fragment>


      <NavBar />


        <div class="box-saldo">
        <h1 style={{ color: 'white'}} >CARGAR SALDO</h1>
          <input class="input_saldo" type="text" id="user" name="username" required
            size="40vw" placeholder="ingrese su nombre de usuario"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }} />
          <div>
            <input class="input_saldo" type="text" id="pass" name="saldo" required
              size="40vw" placeholder="ingrese el monto"
              onChange={(e) => {
                setsaldoReg(e.target.value);
              }} />
          </div>
          <br /><br /><br /><br /><br /><br />
          <div>
            <button class="button_ini" type="button" onClick={submitSaldo}>CARGAR SALDO</button>
          </div>
        </div>
        <div className="App-bottom">
          Copyright © 2022 Bluetify
        </div>
    </Fragment>
  )
}

export default Saldo;