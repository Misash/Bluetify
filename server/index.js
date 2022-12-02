
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');


//coneccion a la base de datos
const db = require("./connection");
const { upload } = require('@testing-library/user-event/dist/upload');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//multer (se encarga de guardar archivos en carpeta uploads del server)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../src");
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`)
    }
});
const upload1 = multer({
    storage: storage
});

//crea un nuevo usuario en la tabla usuarios, con los datos que envie register.js
app.post("/register", (req, res) => {
    const usernamer = req.body.username
    const passwordr = req.body.password
    const nombreCompletor = req.body.fullName

    const sqlInsert = "INSERT INTO usuarios (habilitado, nombre, contraseña,nombre_completo) VALUES (1,?,?,?)"
    db.query(sqlInsert, [usernamer, passwordr, nombreCompletor], (err, result) => {
        console.log(err);
        console.log(result);
    });
})

//Revisa los datos que enviemos de login.js y verifica que el usuario y contrasena se encuentren en una misma fila de la tabla usuarios
app.post("/login", (req, res) => {
    const usernamel = req.body.username
    const passwordl = req.body.password

    db.query("SELECT * FROM usuarios WHERE nombre = ? AND contraseña = ?;"
        , [usernamel, passwordl],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                res.send("correct");
            } else {
                res.send({ message: "error al verificar" });
            }
        }
    );
});

app.get("/get_user/:id/:id2", (req, res) => {

    const id = req.params.id
    const id2 = req.params.id2
    // console.log(id)  

    let sqlselect = `select id_cliente from clientes join usuarios where usuarios.nombre=? and usuarios.contraseña=?`

    db.query(sqlselect, [id, id2], (err, result) => {
        //console.log("\nretorno:" ,result)
        res.send(result[0])
    })

})

//suma el saldo que tiene un cliente con los inputs que le demos en saldo.js
app.post("/saldo", (req, res) => {
    const usernames = req.body.username
    const saldos = req.body.saldo

    const sqlInsert = "update clientes inner join usuarios on usuarios.id_usuario=clientes.id_usuario set saldo=saldo+? where usuarios.nombre=?"
    db.query(sqlInsert, [saldos, usernames], (err, result) => {
        console.log(err);
        console.log(result);
    });
})

//obtiene el saldo del cliente mediante su id_cliente
app.get("/getSaldo/:id", (req, res) => {
    const id = req.params.id
    console.log("id cliente saldo!!", id)
    const sql = "select saldo from clientes where id_cliente = ?"
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("getSaldo: ", result)
            res.send(result)
        }
    })
})


//retorna si 0 si no hay coincidencias de clave 
app.get("/isKeyAvaible/:key", (req, res) => {
    const id_regalo = req.params.key
    const sql = "select count(id_regalo) from codigos where id_regalo = ?"
    db.query(sql, [id_regalo], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("keyAvaible: ", result)
            res.send(result)
        }
    })
})


app.post("/saveGift", (req, res) => {

    console.log(req.body)
    const id_regalo = req.body.id_regalo
    const id_contenido = req.body.id_contenido
    const sql = "insert into codigos (id_regalo , id_contenido) values (?,?)"
    // db.query(sql, [id_regalo , id_contenido], (err, result) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log("Codigo Regalo saved: ")
    //     }
    // })
})

//recibe los datos que envia autor.js y crea una nueva fila en la tabla autor
app.post("/autor", (req, res) => {
    const autor = req.body.autor

    const sqlInsert = "INSERT INTO autores (nombre) VALUES(?)"
    db.query(sqlInsert, [autor], (err, result) => {
        console.log(err);
        // console.log(result);
    });
})

//Recibe los datos que envia contenido (nombre, autor, categoria, descripcion y precio) y crea una nueva fila en la tabla contenidos
app.post("/contenido0", upload1.array('archivo'), (req, res) => {
    // console.log(req)
    const nombrec = req.body.nombre
    const autorc = req.body.autor
    const categoriac = req.body.categoria
    const descripcionc = req.body.descripcion
    const precioc = req.body.precio
    const tipo = req.body.tipo
    const archivo = req.files[0].filename
    const imagen = req.files[1].filename
    // console.log(req.files)
    // console.log(archivo , imagen)

    const sqlInsert = "insert into \
    contenidos(id_categoria,id_autores,precio,tipo,descripcion,nombre,archivo,imagen) \
    select id_categoria, id_autor,?,?,?,?,?,? \
    from categoria,autores where nombre_categoria=? and nombre=?"

    db.query(sqlInsert, [precioc, tipo, descripcionc, nombrec, archivo, imagen, categoriac, autorc], (err, result) => {
        console.log(err);
        // console.log(result);
    });


})
// //Recibe el archivo que manda la pagina de contenido y actualiza la ultima fila creada de la tabla de contenidos en la columna del archivo
// app.post("/contenido1", upload1.single('archivo'), (req, res) => {
//     const archivoc = req.file.filename;
//     const sqlUpdate = "update contenidos as s, (select max(id_contenido)as id from contenidos)as p set s.archivo=? where s.id_contenido=p.id"
//     db.query(sqlUpdate, [archivoc], (err, result) => {
//         console.log(err);
//         // console.log(result);
//     });
// })
// //Recibe la imagen que manda la pagina de contenido y actualiza la ultima fila creada de la tabla de contenidos en la columna de la imagen
// app.post("/contenido2", upload1.single('archivo2'), (req, res) => {
//     const imagenc = req.file.filename;
//     const sqlUpdate = "update contenidos as s, (select max(id_contenido)as id from contenidos)as p set s.imagen=? where s.id_contenido=p.id"
//     db.query(sqlUpdate, [imagenc], (err, result) => {
//         console.log(err);
//         // console.log(result);
//     });
// })

//Recibe los datos que le manda la pagina de categoria para subirlo a la tabla categorias
app.post("/categoria", (req, res) => {
    console.log(req)
    const categoriacc = req.body.categoria
    const subcategoriacc = req.body.subcategoria
    console.log(req.body)

    const sqlInsert = "insert into categoria(id_padre,nombre_categoria) select id_categoria,? from categoria where nombre_categoria=?"
    db.query(sqlInsert, [categoriacc, subcategoriacc], (err, result) => {
        console.log(err);
        console.log(result);
    });
})


//consigue algunas columnas de la tabla contenidos, para luego poder hacer fetch/get
app.get("/tienda", (req, res) => {
    const sqlselect = "select id_contenido,id_categoria, nombre, precio,imagen from contenidos"
    db.query(sqlselect, (err, result) => {
        //console.log(result)
        res.send(result)
    })
})

app.get("/get_clientes", (req, res) => {
    let sqlselect = `SELECT id_cliente, nombre, nombre_completo, saldo FROM usuarios join clientes on usuarios.id_usuario=clientes.id_usuario;`
    db.query(sqlselect, [], (err, result) => {
        // console.log("\ncategorias:" ,result)
        res.send(result)
    })
})

app.get("/get_clientes2/:id", (req, res) => {
    const id = req.params.id

    let sqlselect = `SELECT nombre, nombre_completo, saldo FROM usuarios join clientes on usuarios.id_usuario=clientes.id_usuario where clientes.id_cliente=?`
    db.query(sqlselect, [id], (err, result) => {
        res.send(result[0])
    })
})

app.get("/biblioteca/:id", (req, res) => {
    const id = req.params.id

    const sqlselect = "select contenidos.id_contenido,id_categoria, contenidos.nombre, precio,imagen from contenidos \
    join bibliotecas \
    on contenidos.id_contenido=bibliotecas.id_contenido \
    join clientes \
    on bibliotecas.id_cliente=clientes.id_cliente \
    where clientes.id_cliente=?"
    db.query(sqlselect, [id],(err, result) => {
        //console.log(result)
        res.send(result)
    })
})

//consigue algunas columnas de la tabla categorias, para luego poder hacer fetch
app.get("/categorias", (req, res) => {
    const sqlselect = "select id_categoria,nombre_categoria from categoria"
    db.query(sqlselect, (err, result) => {
        // console.log(result)
        res.send(result)
    })
})
//igual pero con un parametro y mostrando contenidos
app.get("/categorias/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    const sqlselect = "select id_contenido,contenidos.id_categoria, nombre, precio,imagen from contenidos,categoria where nombre_categoria=?";
    db.query(sqlselect, [nombre], (err, result) => {
        //console.log(result)
        res.send(result)
    })
})

//Aqui haremos todos los tests, para la implementacion de una nueva pagina. (puede variar)
app.get("/testget/:id", (req, res) => {
    const id = req.params.id
    const sqlselect = "select archivo from contenidos where id_contenido=?"
    db.query(sqlselect, [id], (err, result) => {
        console.log(result[0]["archivo"])
        res.download("../src/" + result[0]["archivo"])
    })
})


//Aqui haremos la consulta para ver la informacio de un contenido dado su id pasado como parametro
app.get("/Contenido/:id", (req, res) => {

    const id = req.params.id
    // console.log(id)  

    let sqlselect = `select c.id_autores ,c.precio , c.nombre , c.id_autores, c.id_categoria , c.tipo  , c.descripcion  , a.nombre as autor
    from contenidos c left join autores a on c.id_autores = a.id_autor where id_contenido = ? `

    db.query(sqlselect, [id], (err, result) => {
        // console.log("\nretorno:" ,result)
        res.send(result[0])
    })

})

app.get("/listaGen/:id", (req, res) => {

    const id = req.params.id


    let sqlselect = `with recursive my_tree as (
        select id_categoria, id_padre , nombre_categoria
        from categoria
        where id_categoria = ?
         union all
        select m.id_categoria, m.id_padre , m.nombre_categoria
        from categoria m
        join my_tree t on m.id_categoria = t.id_padre)
        select nombre_categoria from my_tree order by id_categoria asc;`

    db.query(sqlselect, [id], (err, result) => {
        // console.log("\nretorno:" ,result)
        res.send(result)
    })

})

app.get("/listaDescargas/:id", (req, res) => {

    const id = req.params.id


    let sqlselect = `select nombre from contenidos 
    join descargas on descargas.id_contenido=contenidos.id_contenido
    where descargas.id_cliente=?;`

    db.query(sqlselect, [id], (err, result) => {
        res.send(result)
    })

})

app.get("/listaCalificaciones/:id", (req, res) => {

    const id = req.params.id


    let sqlselect = `select nombre from contenidos 
    join calificacion on calificacion.id_contenido=contenidos.id_contenido
    where calificacion.id_cliente=?`

    db.query(sqlselect, [id], (err, result) => {
        res.send(result)
    })

})

app.get("/get_categorias", (req, res) => {
    let sqlselect = `select nombre_categoria from categoria;`
    db.query(sqlselect, [], (err, result) => {
        // console.log("\ncategorias:" ,result)
        res.send(result)
    })
})

app.get("/get_autores", (req, res) => {
    let sqlselect = `select nombre from autores;`
    db.query(sqlselect, [], (err, result) => {
        // console.log("\ncategorias:" ,result)
        res.send(result)
    })
})

app.post("/comprar", (req, res) => {
    const id_usuario = req.body.id_user
    const id_contenido = req.body.contenido
    const precio = req.body.price

    console.log(id_usuario)
    console.log(id_contenido)
    console.log(precio)

    const sqlInsert = "update clientes inner join usuarios on usuarios.id_usuario=clientes.id_usuario set saldo=saldo-? where usuarios.id_usuario=?"
    db.query(sqlInsert, [precio, id_usuario], (err, result) => {
        console.log(err);
        console.log(result);
    });

    const sqlInsert2 = "insert into bibliotecas(id_cliente,id_contenido) values(?,?)"
    db.query(sqlInsert2, [id_usuario, id_contenido], (err, result) => {
        console.log(err);
        console.log(result);
    });
})

//envia un mensaje a la consola, solo para saber que todo esta corriendo correctamente.
app.listen(3001, () => {
    console.log("running on port 3001")
})
