import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import NavBarAdmin from './NavbarAdmin';
import Form from 'react-bootstrap/Form';
import "../CSS/Promocion.css"
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function Promocion() {

    let descuentos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 100]

    let variant = "light"
    const [titulo, setTitulo] = useState("Ninguno");
    const [tipoFiltro, setTipoFiltro] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [fecha_inicio, setFechaInicio] = useState("");
    const [fecha_final, setFechaFinal] = useState("");
    const [id_filtro, setIdFiltro] = useState("");
    const [descuento, setDescuento] = useState("0");
    const [promocion, setPromocion] = useState('');

    const url = "http://localhost:3001/";
    console.log(titulo)
    console.log("id_filtro: ", id_filtro)
    console.log("fecha inicial: ", fecha_inicio)
    console.log("fecha_final: ", fecha_final)
    console.log("tipo_filtro: ", tipoFiltro)
    console.log("promocion: ", promocion)

    useEffect(() => {
        async function getcat() {
            axios.get(`${url}categorias`).then((response) => setCategorias(response.data));
        }
        getcat();
    }, []);
    console.log("categorias", categorias)

    //obtenemos la lista de autores
    const [autores, setAutores] = useState([]);
    const url2 = "http://localhost:3001/get_autores";
    useEffect(() => {
        async function getaut() {
            axios.get(url2).then((response) => setAutores(response.data));
        }
        getaut();
    }, []);

    console.log("autores", autores)


    const crearPromocion = () => {
        axios.get(`${url}crearPromo/` + fecha_inicio + "/" + fecha_final + "/" + (descuento / 100) , {
        }).then((response) => setPromocion(response.data.insertId));
    }

    const aplicarPromo = () => {
        axios.post(`${url}aplicarPromo`, {
            tipo_filtro: tipoFiltro,
            id_filtro: id_filtro , 
            id_promocion : promocion
        })
    }

    //cuando se obtenga el id_promocion aplicaremos la promocion a los contenidos
    useEffect(() => {
        console.log("aplicar promo")
        if (promocion != '') {
            aplicarPromo()
            window.location.reload(true);
        }
    }, [promocion]);



    //crear Promocion
    const handleButton = () => {
        if (fecha_inicio != "" && fecha_final != "" && descuento != "0" && titulo != "Ninguno") {
            crearPromocion()
          
        }
    }

    return (
        <div>
            <NavBarAdmin />

            <Form className="promocion">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Crear Promociones</Form.Label>
                    <div>
                        <BsFillCalendarDateFill /> Fecha Inicial
                        <Form.Control type="date" placeholder="ingresa fecha inicial" onChange={(e) => setFechaInicio(e.target.value)} />
                        <BsFillCalendarDateFill /> Fecha Final
                        <Form.Control type="date" placeholder="ingresa fecha final" onChange={(e) => setFechaFinal(e.target.value)} />
                        <FaDollarSign /> Descuento
                        {/* <Form.Control type="text" placeholder="ingresa el porcentage de descuento" onChange={ (e) => setFechaFinal(e.target.value)}  /> */}
                        <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={descuento + " %"}
                        >
                            {descuentos.map((cantidad) => (
                                <Dropdown.Item onClick={(e) => {
                                    setDescuento(cantidad)
                                }} >{cantidad}</Dropdown.Item>
                            ))
                            }
                        </DropdownButton>
                    </div>


                    <div>
                        <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={titulo}
                        >
                            <Dropdown.Divider />

                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title="Categorias"
                            >
                                {categorias.map((categoria) => (
                                    <Dropdown.Item onClick={(e) => {
                                        setIdFiltro(categoria.id_categoria)
                                        setTitulo(e.target.textContent)
                                        setTipoFiltro("categoria")
                                    }} >{categoria.nombre_categoria}</Dropdown.Item>
                                ))
                                }
                            </DropdownButton>

                            <Dropdown.Divider />
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title="Autores"
                            >
                                {autores.map((autor) => (
                                    <Dropdown.Item onClick={(e) => {
                                        setIdFiltro(autor.id_autor)
                                        setTitulo(e.target.textContent)
                                        setTipoFiltro("autor")
                                    }}>{autor.nombre}</Dropdown.Item>
                                ))
                                }
                            </DropdownButton>


                        </DropdownButton>
                    </div>



                </Form.Group>
                <Button variant="primary" onClick={handleButton}>
                    Crear Promocion
                </Button>
            </Form>

        </div>
    )
}


export default Promocion