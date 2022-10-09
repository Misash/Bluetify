const express = require('express');
const cors=require("cors");
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"password",
    database:'bluetify',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/get",(req,res)=>{
    const sqlSelect = "SELECT * FROM tusuarios";
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
});
});

app.post("/register", (req, res) => {
    const usernamer = req.body.username
    const passwordr = req.body.password
    const nombreCompletor = req.body.fullName

    const sqlInsert = "INSERT INTO tusuarios (nombre, password, nombreCompleto,habilitado,saldo) VALUES (?,?,?,TRUE,0)"
    db.query(sqlInsert, [usernamer, passwordr, nombreCompletor],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/login",(req,res)=>{
    const usernamel=req.body.username
    const passwordl=req.body.password

    db.query("SELECT * FROM tusuarios WHERE nombre = ? AND password = ?;"
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

    const sqlInsert = "update tusuarios set saldo=? WHERE nombre=?"
    db.query(sqlInsert, [saldos,usernames],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/autor", (req, res) => {
    const autor = req.body.autor

    const sqlInsert = "INSERT INTO tautores (nombre) VALUES(?)"
    db.query(sqlInsert, [autor],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/register", (req, res) => {
    const usernamer = req.body.username
    const passwordr = req.body.password
    const nombreCompletor = req.body.fullName

    const sqlInsert = "INSERT INTO tusuarios (nombre, password, nombreCompleto,habilitado,saldo) VALUES (?,?,?,TRUE,0)"
    db.query(sqlInsert, [usernamer, passwordr, nombreCompletor],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/contenido", (req, res) => {
    const nombrec = req.body.nombre
    const autorc = req.body.autor
    const categoriac = req.body.categoria
    const descripcionc = req.body.descripcion
    const precioc = req.body.precio

    const sqlInsert = "INSERT INTO tcontenidos (nombre, autor, categoria,descripcion,precio) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [nombrec, autorc, categoriac,descripcionc,precioc],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.post("/categoria", (req, res) => {
    const categoriacc = req.body.categoria
    const subcategoriacc = req.body.subcategoria

    const sqlInsert = "INSERT INTO tcategoria (sub_categoria, nombre_categoria) VALUES (?,?)"
    db.query(sqlInsert, [subcategoriacc, categoriacc],(err,result)=>{
        console.log(err);
        console.log(result);
    });
})

app.listen(3001, () => {
console.log("running on port 3001")
})