
const express = require('express');
const cors=require("cors");
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');


//coneccion a la base de datos
const db = require("./connection");
const { upload } = require('@testing-library/user-event/dist/upload');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//multer
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"./");},
    filename: function(req,file,cb){
        const ext=file.mimetype.split("/")[1];
        cb(null,`uploads/${file.originalname}-${Date.now()}.${ext}`)
    }
});
const upload1=multer({
    storage: storage
});

app.get("/get",(req,res)=>{
    const sqlSelect = "SELECT * FROM usuarios";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
});
});

app.post("/register", (req, res) => {
    const usernamer = req.body.username
    const passwordr = req.body.password
    const nombreCompletor = req.body.fullName

    const sqlInsert = "INSERT INTO usuarios (habilitado, nombre, contraseña,nombre_completo) VALUES (1,?,?,?)"
    db.query(sqlInsert, [usernamer, passwordr, nombreCompletor],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/login",(req,res)=>{
    const usernamel=req.body.username
    const passwordl=req.body.password

    db.query("SELECT * FROM usuarios WHERE nombre = ? AND contraseña = ?;"
    ,[usernamel,passwordl],
    (err,result)=>{
        if (err){
            res.send({err: err})
        } 
        if (result.length > 0) {
            res.send("correct");
        } else {
            res.send({message: "error al verificar"});
        }
    }
    );
});

app.post("/saldo", (req, res) => {
    const usernames = req.body.username
    const saldos = req.body.saldo

    const sqlInsert = "update clientes inner join usuarios on usuarios.id_usuario=clientes.id_usuario set saldo=? where usuarios.nombre=?"
    db.query(sqlInsert, [saldos,usernames],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/autor", (req, res) => {
    const autor = req.body.autor

    const sqlInsert = "INSERT INTO autores (nombre) VALUES(?)"
    db.query(sqlInsert, [autor],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/contenido0", (req, res) => {
    const nombrec=req.body.nombre
    const autorc = req.body.autor
    const categoriac = req.body.categoria
    const descripcionc = req.body.descripcion
    const precioc = req.body.precio
    //precioc,descripcionc,nombrec,archivoc,imagenc, categoriac,autorc

    const sqlInsert = "insert into contenidos(id_categoria,id_autores,precio,tipo,descripcion,nombre,archivo,imagen) select id_categoria, id_autor,?,'.mp3',?,?,'1','1' from categoria,autores where nombre_categoria=? and nombre=?"
    db.query(sqlInsert, [precioc,descripcionc,nombrec,categoriac,autorc],(err,result)=>{
        console.log(err);
        console.log(result);
    });

})
app.post("/contenido1",upload1.single('archivo'), (req, res) => {
    const archivoc=req.file.filename;
    const sqlUpdate="update contenidos as s, (select max(id_contenido)as id from contenidos)as p set s.archivo=? where s.id_contenido=p.id"
    db.query(sqlUpdate, [archivoc],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})
app.post("/contenido2",upload1.single('archivo2'), (req, res) => {
    const imagenc=req.file.filename;
    const sqlUpdate="update contenidos as s, (select max(id_contenido)as id from contenidos)as p set s.imagen=? where s.id_contenido=p.id"
    db.query(sqlUpdate, [imagenc],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/categoria", (req, res) => {
    const categoriacc = req.body.categoria
    const subcategoriacc = req.body.subcategoria

    const sqlInsert = "insert into categoria(id_padre,nombre_categoria) select id_categoria,? from categoria where nombre_categoria=?"
    db.query(sqlInsert, [categoriacc,subcategoriacc],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.listen(3001, () => {
console.log("running on port 3001")
})